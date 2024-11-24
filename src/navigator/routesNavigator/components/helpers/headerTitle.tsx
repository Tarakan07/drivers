import React, { memo } from "react";
import { TextStyle } from "react-native";
import { Text } from "../../../../libs/UI";

const HeaderTitle = memo(
  ({ title = null, style }: { title: string; style?: TextStyle }) => {
    return (
      <Text
        variantSize="S4"
        variantWight="Bold"
        style={{
          textAlign: "left",
          ...style,
        }}
      >
        {title ? title : ""}
      </Text>
    );
  }
);

export default HeaderTitle;
