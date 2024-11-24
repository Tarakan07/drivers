import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { usePagination } from "../../libs/hooks";
import { Text } from "../../libs/UI";
import ArrowButton from "./ArrowButton";
import PaginationButton from "./PaginationButton";

type TProps = {
  limit: string;
  offset: string;
  total: string;
  refetch: (params: { limit: string; offset: string }) => void;
};

const Pagination: FC<TProps> = (props) => {
  const { currentPage, totalPages, handlePageChange } = usePagination(props);

  return (
    <View style={styles.container}>
      <View style={styles.paginationRow}>
        <ArrowButton
          direction="<"
          onPress={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <View style={styles.rowNumbers}>
          <PaginationButton
            visible={currentPage !== 1}
            value={1}
            onPress={handlePageChange}
          />
          <PaginationButton
            visible={currentPage - 1 > 1}
            value={currentPage - 1}
            onPress={handlePageChange}
          />

          <Text style={[styles.pageNumber, styles.activePage]}>
            {currentPage}
          </Text>

          <PaginationButton
            visible={currentPage + 1 < totalPages}
            value={currentPage + 1}
            onPress={handlePageChange}
          />
          {totalPages > currentPage + 1 && (
            <Text style={styles.dots}>.....</Text>
          )}
          <PaginationButton
            visible={totalPages > 1}
            value={totalPages}
            onPress={handlePageChange}
            isLastPage={currentPage === totalPages}
          />
        </View>
        <ArrowButton
          direction=">"
          onPress={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  paginationRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },

  rowNumbers: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  pageNumber: {
    color: "#2c3e50",
    fontWeight: "500",
    fontSize: 16,
  },
  activePage: {
    color: "#1da5f3",
    fontWeight: "700",
    paddingHorizontal: 5,
    borderRadius: 5,
    height: "100%",
  },
  dots: {
    color: "#95a5a6",
  },
});

export default Pagination;
