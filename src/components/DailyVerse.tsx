import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { colors, radius, spacing } from "../theme/Theme";

const DailyVerse = () => (
  <View style={styles.container}>
    <Text style={styles.quoteIcon}>{"\u201C"}</Text>
    <Text style={styles.verse}>
      For God so loved the world that he gave his one and only Son, that whoever
      believes in him shall not perish but have eternal life.
    </Text>
    <Text style={styles.reference}>{"\u2014 John 3:16"}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  quoteIcon: {
    fontSize: 48,
    color: colors.accent,
    lineHeight: 48,
    marginBottom: -spacing.sm,
    fontWeight: "700",
  },
  verse: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 24,
    fontStyle: "italic",
  },
  reference: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: "600",
    marginTop: spacing.md,
    textAlign: "right",
  },
});

export default DailyVerse;
