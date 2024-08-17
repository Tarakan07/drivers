import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useMyTheme } from "../../../../libs/contexts/styles";
import { HeaderClose, HeaderTitle } from "../helpers";
import { mainStyle } from "../../../../constants/commonStyles";
type TProps = {
  title?: string;
  notification?: boolean;
  settings?: boolean;
  close?: boolean;
  callbackClose?: () => void | null;
  children?: any;
};
const HeaderGeneral = memo((props: TProps) => {
  const {
    title = null,

    close = false,
    callbackClose = null,
    children,
  } = props;
  const theme = useMyTheme();
  const RightComponent = useMemo(() => {
    if (close) return <HeaderClose {...{ callbackClose }} />;
    else null;
  }, [close]);
  return (
    <View style={[styles.container, { backgroundColor: theme.bgc.default }]}>
      {!title && children ? children : <HeaderTitle {...{ title }} />}

      <View>{RightComponent}</View>
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
export default HeaderGeneral;
