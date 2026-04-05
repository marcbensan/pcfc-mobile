import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { colors, radius, spacing } from "../theme/Theme";

interface EventCardProps {
  title: string;
  description: string;
  month: string;
  day: string;
}

const EventCard = ({ title, description, month, day }: EventCardProps) => (
  <TouchableRipple onPress={() => {}} borderless style={styles.touchable}>
    <View style={styles.container}>
      <View style={styles.dateBadge}>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.day}>{day}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  </TouchableRipple>
);

const styles = StyleSheet.create({
  touchable: {
    borderRadius: radius.md,
    marginBottom: spacing.sm,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  dateBadge: {
    width: 52,
    height: 52,
    borderRadius: radius.sm,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  month: {
    fontSize: 10,
    fontWeight: "800",
    color: colors.primary,
    letterSpacing: 1,
  },
  day: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary,
    lineHeight: 22,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
});

export default EventCard;
