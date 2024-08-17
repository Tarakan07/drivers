import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { CloseSvg } from "../../../../assets/svgComp/navigator";
const HeaderClose = ({ callbackClose = null }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        return callbackClose ? callbackClose() : navigation.goBack();
      }}
    >
      <CloseSvg />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
export default HeaderClose;
