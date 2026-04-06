import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, radius, spacing } from "../theme/Theme";

interface QuickActionProps {
  icon: string;
  label: string;
  onPress: () => void;
}

const QuickAction = ({ icon, label, onPress }: QuickActionProps) => (
  <TouchableRipple onPress={onPress} borderless style={styles.touchable}>
    <View style={styles.item}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color={colors.accent} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableRipple>
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
