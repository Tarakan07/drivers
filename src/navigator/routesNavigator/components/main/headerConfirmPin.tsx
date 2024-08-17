import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { AvatarHideSvg, LabelSvg } from "../../../../assets/svgComp/navigator";
import { Text } from "../../../../libs/UI";
import { maskEmail } from "../../../../libs/UTILS";
import { useMyTheme } from "../../../../libs/contexts/styles";
import { mainStyle } from "../../../../constants/commonStyles";
type TProps = {};
const HeaderConfirmPin = memo((props) => {
  const theme = useMyTheme();
  const email = maskEmail("borisgalunga7@gmail.com");
  return (
    <View style={[styles.container, { backgroundColor: theme.bgc.default }]}>
      <LabelSvg />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text variantSize="S2" style={{ marginRight: 8 }}>
          {email}
        </Text>
        <AvatarHideSvg />
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    paddingTop: mainStyle.paddingTopNavigator,
    paddingBottom: mainStyle.paddingBottomNavigator,
    paddingHorizontal: mainStyle.marginHorizontal,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
  },
});
export default HeaderConfirmPin;
