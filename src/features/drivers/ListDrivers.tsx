import React, { useCallback, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "../../libs/UI";
import { fetchRacingDrivers } from "../../services/API/drivers/actions";
import { useMyDispatch, useMySelector } from "../../services/helpers";
import ListDriverItem from "./ListDriverItem";
import ListError from "./ListError";
import ListFooter from "./ListFooter";
const ListDrivers = () => {
  const {
    status,
    limit,
    offset,
    total,
    DriverTable: { Drivers },
  } = useMySelector((state) => state.driversSlice);
  const dispatch = useMyDispatch();
  //
  useEffect(() => {
    dispatch(fetchRacingDrivers({ limit, offset }));
  }, []);

  //
  const refetch = ({ limit, offset }: { limit: string; offset: string }) => {
    dispatch(fetchRacingDrivers({ limit, offset }));
  };
  //
  if (status.error)
    return <ListError {...{ refetch, status, limit, offset }} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={Drivers}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.driverId}`}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", marginTop: 100 }}>Empty</Text>
        )}
        refreshing={status.loading}
        onRefresh={() => {
          refetch({ limit, offset });
        }}
        renderItem={({ item }) => {
          return <ListDriverItem {...item} />;
        }}
        ListHeaderComponent={() => {
          return <ListFooter {...{ limit, offset, total, refetch }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default ListDrivers;
