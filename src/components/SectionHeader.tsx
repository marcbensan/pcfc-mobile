import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, spacing } from "../theme/Theme";
import AnimatedPressable from "./AnimatedPressable";

interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
}

const SectionHeader = ({ title, onSeeAll }: SectionHeaderProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {onSeeAll && (
      <AnimatedPressable
        onPress={onSeeAll}
        testID="see-all-button"
        scale={0.92}
        innerStyle={styles.seeAllButton}
      >
        <Text style={styles.seeAll}>See All</Text>
        <Icon name="chevron-right" size={16} color={colors.accent} />
      </AnimatedPressable>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAll: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: "500",
  },
});

export default SectionHeader;
