import * as React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { theme } from "../theme/Theme";

const AddPostButton = () => (
  <View style={styles.container}>
    <FAB
      variant="primary"
      mode="elevated"
      icon="plus"
      animated={true}
      size="medium"
      style={styles.fab}
      onPress={() => console.log("Pressed")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  fab: {
    margin: 24,
    backgroundColor: theme.colors.secondary,
  },
});

export default AddPostButton;
