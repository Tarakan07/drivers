import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { memo } from "react";
import { useMyTheme } from "../../libs/styles";
import { navigationRef } from "./rootNavigation";
const NavContainer = memo((props: any) => {
  const theme = useMyTheme();
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        dark: theme.isDark,

        colors: {
          primary: theme.bgc.default,
          background: theme.bgc.default,

          card: theme.bgc.default,
          text: theme.text.default,
          border: "transparent",
          notification: theme.bgc.default,
        },
      }}
    >
      {props.children}
    </NavigationContainer>
  );
});

export default NavContainer;
