import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMySelector } from "../services/helpers";
const TestComp: FC = () => {
  const {} = useMySelector((state) => state.ratingStartSlice);
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
export default TestComp;
