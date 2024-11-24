import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  TDriversReq,
  TDriverStoreStatus,
} from "../../services/API/drivers/type";
type TProps = {
  refetch: (params: TDriversReq) => void;
  status: TDriverStoreStatus;
} & TDriversReq;
const ListError: FC<TProps> = ({ refetch, status, limit, offset }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          refetch({ limit, offset });
        }}
      >
        <Text style={{ textAlign: "center", color: "red" }}>CLICK REFETCH</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(status.error)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default ListError;
