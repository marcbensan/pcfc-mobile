import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { theme } from "../theme/Theme";

const AddPostButton = () => (
  <FAB
    icon="plus"
    size="medium"
    style={styles.fab}
    onPress={() => console.log("Pressed")}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 24,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.secondary,
  },
});

export default AddPostButton;
