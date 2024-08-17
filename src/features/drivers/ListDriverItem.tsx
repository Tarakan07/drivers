import React, { FC } from "react";
import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { routes } from "../../constants/routes";
import { Text } from "../../libs/UI";
import { useMyTheme } from "../../libs/styles";
import { navigate } from "../../navigator/containterNavigator/rootNavigation";
import { TDriver } from "../../services/API/drivers/type";
const ListDriverItem: FC<TDriver> = (item) => {
  const theme = useMyTheme();

  //
  const entriesArray: { key: keyof TDriver; value: any }[] = Object.entries(
    item
  ).map(([key, value]) => ({
    key: key as keyof TDriver,
    value,
  }));

  return (
    <View style={styles.container}>
      {entriesArray.map((keyValue) => {
        return (
          <View style={styles.item} key={`${keyValue.key}`}>
            <Text secondary variantSize="S3">
              {keyValue.key}:
            </Text>
            <Text
              style={{ marginLeft: 4 }}
              color={
                keyValue.key == "url" ? theme.text.link : theme.text.default
              }
              numberOfLines={1}
              ellipsizeMode="tail"
              onPress={() => {
                if (keyValue.key == "url")
                  Linking.canOpenURL(keyValue.value) &&
                    Linking.openURL(keyValue.value);
              }}
            >
              {keyValue.value}
            </Text>
          </View>
        );
      })}
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate(routes.INNER_DRIVER, {
              driver: item,
              title: item.givenName,
            });
          }}
        >
          <Text>Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 4,
    borderBottomColor: "green",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  item: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ListDriverItem;
