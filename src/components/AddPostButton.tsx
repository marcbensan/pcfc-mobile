import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { colors } from "../theme/Theme";

interface AddPostButtonProps {
  onPress: () => void;
}

const AddPostButton = ({ onPress }: AddPostButtonProps) => (
  <FAB
    icon="plus"
    animated
    style={styles.fab}
    color={colors.accentDark}
    onPress={onPress}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: colors.accent,
    borderRadius: 28,
    zIndex: 10,
  },
});

export default AddPostButton;
