import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../../libs/UI";

const PaginationButton = ({ value, visible, onPress, isLastPage = false }) => {
  if (!visible) return null;
  return (
    <TouchableOpacity onPress={() => onPress(value)} style={styles.pageButton}>
      <Text style={isLastPage ? styles.activePage : styles.pageNumber}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pageButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#ecf0f1",
  },
  pageNumber: {
    color: "#2c3e50",
    fontWeight: "500",
  },
  activePage: {
    color: "#e74c3c",
    fontWeight: "700",
    backgroundColor: "#ffe6e6",
    // paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default PaginationButton;
