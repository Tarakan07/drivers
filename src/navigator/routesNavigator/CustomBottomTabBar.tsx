import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { routes } from "../../constants/routes";
// import {
//   CoursesSvg,
//   HomeSvg,
//   UserSvg,
//   HeartSvg,
// } from "../../assets/svgComp/bottomTabs";

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: Platform.OS == "ios" ? 80 : 65,

        paddingHorizontal: 8,
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => navigation.navigate(route.name);

        const iconSize = 24;

        const tabBarIcon = ({ focused, color, size }) => {
          return null;
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              backgroundColor: "transparent",
              marginHorizontal: 6,
              borderRadius: 4,
            }}
          >
            {tabBarIcon({
              focused: isFocused,
              color: `red`,
              size: iconSize,
            })}
            <Text
              numberOfLines={1}
              maxFontSizeMultiplier={1.05}
              style={{
                marginTop: 5,

                color: "#fff",
                fontSize: 12,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTabBar;
