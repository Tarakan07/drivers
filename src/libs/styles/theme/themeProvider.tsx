import React, { useEffect } from "react";
import {
  Appearance,
  Platform,
  View,
  useColorScheme,
  StatusBar,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { DARK_THEME, LIGHT_THEME } from "./themesConstants";
import { SafeAreaProvider } from "react-native-safe-area-context";

const initialScheme = Appearance.getColorScheme();
export const initialTheme = initialScheme == "light" ? LIGHT_THEME : DARK_THEME;

const Context = React.createContext({
  ...initialTheme,
  forcedTheme: null as null | "light" | "dark",
  setForcedTheme: (theme: null | "light" | "dark") => {},
});
const isAndroid = Platform.OS === "android";

// isAndroid && NavigationBar.setBackgroundColorAsync(initialTheme.bgc.primary); //
// isAndroid &&
//   NavigationBar.setButtonStyleAsync(initialTheme.isDark ? "dark" : "light");

const ThemeProvider = (props) => {
  const [themeVariant, setThemeVariant] = React.useState(initialScheme);
  const [theme, setTheme] = React.useState(initialTheme);
  // StatusBar.setBarStyle(initialTheme.statusbar, true);
  const colorScheme = useColorScheme();

  const [forcedTheme, setForcedTheme] = React.useState(
    props.storedForcedTheme || (null as null | "light" | "dark")
  );

  useEffect(() => {
    forcedTheme
      ? AsyncStorage.setItem("@exnode/forcedTheme", forcedTheme)
      : AsyncStorage.removeItem("@exnode/forcedTheme");
  }, [forcedTheme]);

  useEffect(() => {
    const usedTheme = forcedTheme || colorScheme;
    if (usedTheme != themeVariant) setThemeVariant(usedTheme);
  }, [colorScheme, forcedTheme]);

  useEffect(() => {
    setTheme((currentTheme) => {
      switch (themeVariant) {
        case "light":
          // isAndroid &&
          //   NavigationBar.setBackgroundColorAsync(LIGHT_THEME.bgc.default);
          // isAndroid && NavigationBar.setButtonStyleAsync("light");
          // StatusBar.setBarStyle(LIGHT_THEME.statusbar, true);
          return LIGHT_THEME;
        case "dark":
          // isAndroid &&
          //   NavigationBar.setBackgroundColorAsync(DARK_THEME.bgc.default);
          // isAndroid && NavigationBar.setButtonStyleAsync("dark");
          // StatusBar.setBarStyle(DARK_THEME.statusbar, true);
          return DARK_THEME;
        default:
          return currentTheme;
      }
    });
  }, [themeVariant]);

  return (
    <>
      <StatusBar backgroundColor={theme.bgc.default} barStyle="light-content" />
      <SafeAreaProvider style={{ backgroundColor: theme.bgc.default }}>
        <Context.Provider
          value={{
            ...theme,
            forcedTheme,
            setForcedTheme,
          }}
        >
          {props.children}
        </Context.Provider>
      </SafeAreaProvider>
    </>
  );
};

export default React.memo(ThemeProvider);
export const useMyTheme = () => {
  const context = React.useContext(Context);

  return context;
};
