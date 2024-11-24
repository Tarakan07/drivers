import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { memo } from "react";
import { navigationRef } from "./rootNavigation";
const NavContainer = memo((props: any) => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,

        colors: {
          primary: "#000",
          background: "#000",

          card: "#000",
          text: "#fff",
          border: "transparent",
          notification: "#000",
        },
      }}
    >
      {props.children}
    </NavigationContainer>
  );
});

export default NavContainer;
