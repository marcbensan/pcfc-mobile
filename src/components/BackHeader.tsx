import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, spacing } from "../theme/Theme";

interface BackHeaderProps {
  title: string;
  onBack: () => void;
}

const BackHeader = ({ title, onBack }: BackHeaderProps) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onBack} style={styles.backButton}>
      <Icon name="arrow-left" size={22} color={colors.text} />
    </TouchableOpacity>
    <Text style={styles.title} numberOfLines={1}>
      {title}
    </Text>
    <View style={styles.spacer} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    marginLeft: spacing.md,
  },
  spacer: {
    width: 40,
  },
});

export default BackHeader;
