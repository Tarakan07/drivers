import React, { FC, useCallback } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../libs/UI";

type TProps = {
  limit: string;
  offset: string;
  total: string;
  refetch: (params: { limit: string; offset: string }) => void;
};
const ListFooter: FC<TProps> = ({ limit, offset, total, refetch }) => {
  const limitNumber = Number(limit);
  const offsetNumber = Number(offset);
  const totalNumber = Number(total);
  const totalPages = Math.ceil(totalNumber / limitNumber);

  const currentPage = Math.floor(offsetNumber / limitNumber) + 1;

  const handlePageChange = useCallback(
    (params) => {
      refetch({
        limit,
        offset: String(params * limitNumber - limitNumber),
      });
    },
    [limitNumber, limitNumber]
  );
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Text>{"<"}</Text>
        </TouchableOpacity>
        <View style={styles.rowNumbers}>
          <Touchable
            {...{ handlePageChange, visible: currentPage != 1, value: 1 }}
          />

          <Touchable
            {...{
              handlePageChange,
              visible: currentPage - 1 > 1,
              value: currentPage - 1,
            }}
          />

          {currentPage != totalPages && (
            <Text style={{ color: "red" }}>{currentPage}</Text>
          )}

          <Touchable
            {...{
              handlePageChange,
              visible:
                currentPage + 1 !== totalPages && currentPage !== totalPages,
              value: currentPage + 1,
            }}
          />

          <Text>.....</Text>

          <TouchableOpacity onPress={() => handlePageChange(totalPages)}>
            <Text color={currentPage == totalPages ? "red" : "default"}>
              {totalPages}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => handlePageChange(currentPage + 1)}
          disabled={currentPage == totalPages}
        >
          <Text>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Touchable = ({ disabled = false, value, visible, handlePageChange }) => {
  return (
    <>
      {visible && (
        <TouchableOpacity
          onPress={() => handlePageChange(value)}
          disabled={disabled}
        >
          <Text>{value}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  arrow: {
    padding: 10,
  },
  rowNumbers: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default ListFooter;
