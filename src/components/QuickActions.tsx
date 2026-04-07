import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, radius, spacing } from "../theme/Theme";
import AnimatedPressable from "./AnimatedPressable";

interface QuickActionProps {
  icon: string;
  label: string;
  onPress: () => void;
}

const QuickAction = ({ icon, label, onPress }: QuickActionProps) => (
  <AnimatedPressable onPress={onPress} style={styles.touchable} scale={0.93}>
    <View style={styles.item}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color={colors.accent} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  </AnimatedPressable>
);

const QuickActions = () => (
  <View style={styles.container}>
    <QuickAction icon="play-circle-outline" label="Watch" onPress={() => {}} />
    <QuickAction icon="hands-pray" label="Pray" onPress={() => {}} />
    <QuickAction icon="hand-heart-outline" label="Give" onPress={() => {}} />
    <QuickAction
      icon="calendar-month-outline"
      label="Events"
      onPress={() => {}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
  touchable: {
    borderRadius: radius.md,
    flex: 1,
    marginHorizontal: 4,
  },
  item: {
    alignItems: "center",
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderTopWidth: 2,
    borderTopColor: colors.accent,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.surfaceVariant,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text,
  },
});

export default QuickActions;
