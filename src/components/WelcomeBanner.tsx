import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { colors, radius, spacing } from "../theme/Theme";

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};

const formatDate = (): string =>
  new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

const WelcomeBanner = () => (
  <View style={styles.container}>
    <Text style={styles.date}>{formatDate()}</Text>
    <Text style={styles.greeting}>{getGreeting()}</Text>
    <Text style={styles.subtitle}>Welcome to PCFC</Text>
    <View style={styles.pill}>
      <View style={styles.dot} />
      <Text style={styles.pillText}>Live this Sunday · 9:00 AM</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  date: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    letterSpacing: 0.5,
  },
  greeting: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: spacing.md,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.accentDark,
    paddingHorizontal: spacing.sm + 4,
    paddingVertical: 6,
    borderRadius: radius.full,
    alignSelf: "flex-start",
    gap: 8,
    borderWidth: 1,
    borderColor: "rgba(241, 227, 193, 0.15)",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#4ade80",
  },
  pillText: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: "600",
  },
});

export default WelcomeBanner;
