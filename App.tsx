import React from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { useReachable } from "./src/libs/hooks";
import ThemeProvider from "./src/libs/styles/theme/themeProvider";
import { NavContainer, Navigator } from "./src/navigator";
import store, { persistor } from "./src/services/store";
import { PersistGate } from "redux-persist/integration/react";
function App(): React.JSX.Element {
  const { netReachable } = useReachable();
  if (!netReachable) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavContainer>
              <Navigator />
            </NavContainer>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
