import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export interface StyleStorage {
  [styleName: string]: StyleStorage | ViewStyle | ImageStyle | TextStyle;
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;
type variant = "V1" | "V2" | "V3";

const setColorType = <T extends Record<string, string>>(
  colors: T
): Record<keyof T, Color> => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    acc[key as keyof T] = value as Color;
    return acc;
  }, {} as Record<keyof T, Color>);
};
export const variantColor = setColorType({
  darkBlue: "#16192E",
  blue1: "#2D74FF",
  blue2: "#0F56E1",
  blue3: "#2A2A8F",
  // ----
  red1: "#EB4D3D",
  red2: "#FAD2CE",
  orange1: "#F5A123",
  orange2: "#FCE7C8",
  yellow1: "#FDD816",
  yellow2: "#FEF5C4",
  yellow3: "#FFFDF2",
  green1: "#48BE62",
  green2: "#D1EFD7",

  lightBlue1: "#F7F9FD",
  lightBlue2: "#DEF2FF",
  lightBlue3: "#A0D8FF",
  greyBlue1: "#F3F5F9",
  greyBlue2: "#EAEEF4",
  greyBlue3: "#D9DFEC",
  greyBlue4: "#C8CFDB",
  greyScale1: "#2B2B2B",
  greyScale2: "#989CAD",
  greyScale3: "#E5E7EB",
  greyScale4: "#EDF0F5",
  greyScale5: "#989CAD",
  greyScale6: "#F8FAFB",
  halftones1: "rgba(255, 255, 255, 0.5)",
  halftones2: "rgba(0, 0, 0, 0.5)",
  white: "#FFFFFF",
  ////////////////

  reverseDarkBlue: "#EAEEF4",

  // ----
  dRed2: "#231918",
  dGreen2: "#414E43",
  dOrange2: "#373024",
  dLightBlue1: "#232936",
  dLightBlue2: "#29343B",
  dGreyBlue1: "#2F3540",
  dGreyBlue2: "#515F75",
  dGreyBlue3: "#5F6C86",
  dGreyBlue4: "#8594AD",
  dGreyScale2: "#333C4E",
  dGreyScale5: "#B3B8CA",
  black: "#15161B",
});

export interface Theme {
  id: "default-light" | "default-dark";
  isDark: boolean;
  navigationBar: Color;
  statusbar: "light-content" | "dark-content"; // statusbar mode
  bgc: {
    default: Color;
  };
  text: {
    default: Color;
    secondary: Color;
    link: Color;
  };
}

export const LIGHT_THEME: Theme = {
  id: "default-light",
  isDark: false,
  statusbar: "dark-content",
  navigationBar: "#fff",
  bgc: {
    default: variantColor.white,
  },
  text: {
    default: variantColor.darkBlue,
    secondary: variantColor.greyScale5,
    link: variantColor.blue1,
  },
};

export const DARK_THEME: Theme = {
  id: "default-dark",
  isDark: true,
  statusbar: "light-content",
  navigationBar: "#000",

  bgc: {
    default: variantColor.black,
  },

  text: {
    default: variantColor.reverseDarkBlue,
    link: variantColor.blue1,
    secondary: variantColor.dGreyScale5,
  },
};
