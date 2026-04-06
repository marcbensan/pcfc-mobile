import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, radius, spacing } from "../theme/Theme";

const Give = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Icon name="hand-heart-outline" size={64} color={colors.accent} />
      <Text style={styles.title}>Tithes & Offerings</Text>
      <Text style={styles.subtitle}>
        Your generosity helps us serve our community and further God's kingdom.
      </Text>
    </View>
    <View style={styles.buttons}>
      <Button
        mode="contained"
        icon="credit-card-outline"
        style={styles.button}
        labelStyle={styles.buttonLabel}
        contentStyle={styles.buttonContent}
        onPress={() => {}}
      >
        Give Online
      </Button>
      <Button
        mode="outlined"
        icon="bank-outline"
        style={styles.outlinedButton}
        labelStyle={styles.outlinedLabel}
        contentStyle={styles.buttonContent}
        onPress={() => {}}
      >
        Bank Transfer
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: spacing.lg,
  },
  header: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginTop: spacing.md,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: spacing.sm,
    lineHeight: 20,
    paddingHorizontal: spacing.lg,
  },
  buttons: {
    gap: spacing.md,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: radius.xl,
  },
  buttonLabel: {
    color: colors.accentDark,
    fontWeight: "700",
    fontSize: 16,
  },
  buttonContent: {
    paddingVertical: spacing.sm,
  },
  outlinedButton: {
    borderColor: colors.accent,
    borderRadius: radius.xl,
    borderWidth: 1.5,
  },
  outlinedLabel: {
    color: colors.accent,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default Give;
