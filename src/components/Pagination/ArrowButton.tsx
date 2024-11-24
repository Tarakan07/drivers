import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../../libs/UI";

const ArrowButton = ({ direction, onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.arrow, disabled && styles.disabledArrow]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={disabled ? styles.disabledText : styles.arrowText}>
      {direction}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  arrow: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#3498db",
  },
  disabledArrow: {
    backgroundColor: "#dfe6e9",
  },

  arrowText: {
    color: "#fff",
    fontSize: 16,
  },
  disabledText: {
    color: "#7f8c8d",
  },
});

export default ArrowButton;
