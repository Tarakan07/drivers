import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { routes } from "../../constants/routes";

import Drivers from "../../screens/Drivers";
import CustomTabBar from "./customBottomTabBar";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName={routes.DRIVERS}
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size, focused }) => {
          return null;
        },
      })}
    >
      <Tab.Screen
        name={routes.DRIVERS}
        component={Drivers}
        options={{ title: "Главная" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
