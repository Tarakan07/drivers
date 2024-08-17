import React from "react";
import { TextProps, Text as NativeText, StyleSheet } from "react-native";
import { useMyTheme } from "../styles";

export type TTextVariantSize =
  | "S0"
  | "S1"
  | "S2"
  | "S3"
  | "S4"
  | "S5"
  | "S6"
  | "S7";
export type TTextVariantWeight =
  | "Bold" //700
  | "SemiBold" //600
  | "Medium" //500
  | "Regular" //400
  | "Light"; //300
interface CustomTextProps extends TextProps {
  variantSize?: TTextVariantSize;
  variantWight?: TTextVariantWeight;
  secondary?: boolean;
  multiLine?: boolean;
  color?: string | "default";
}
function MultiLineText(props) {
  return (
    <NativeText {...props} adjustsFontSizeToFit={false} numberOfLines={0} />
  );
}
export default function Text(props: CustomTextProps) {
  const Component = props.multiLine ? MultiLineText : NativeText;
  const theme = useMyTheme();
  return (
    <Component
      {...props}
      maxFontSizeMultiplier={1.2}
      style={[
        props.secondary ? styles.secondary : styles.text,

        styles[props?.variantSize],
        stylesWeight[props?.variantWight],
        {
          color: !props.secondary ? theme.text.default : theme.text.secondary,
        },
        props.color && {
          color: props.color == "default" ? theme.text.default : props.color,
        },

        props.style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "300",
  },
  secondary: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "300",
  },

  S0: {
    fontSize: 10,
    lineHeight: 12,
  },
  S1: {
    fontSize: 13,
    lineHeight: 16,
  },
  S2: {
    // fontFamily: "sf-pro-semibold",
    fontSize: 15,
    lineHeight: 20,
  },
  S3: {
    fontSize: 17,
    lineHeight: 22,
  },
  S4: {
    fontSize: 20,
    lineHeight: 24,
  },
  S5: {
    fontSize: 22,
    lineHeight: 28,
  },
  S6: {
    fontSize: 24,
    lineHeight: 32,
  },
  S7: {
    fontSize: 32,
    lineHeight: 40,
  },
});

const stylesWeight = StyleSheet.create({
  Bold: {
    fontWeight: "700",
  },
  SemiBold: {
    fontWeight: "600",
  },
  Medium: {
    fontWeight: "500",
  },
  Regular: {
    fontWeight: "400",
  },
  Light: {
    fontWeight: "300",
  },
});
