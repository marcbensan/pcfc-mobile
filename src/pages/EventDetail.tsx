import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackHeader from "../components/BackHeader";
import { EventItem } from "../data/EventData";
import { colors, radius, spacing } from "../theme/Theme";

interface EventDetailProps {
  event: EventItem;
  goBack: () => void;
}

const InfoRow = ({ icon, text }: { icon: string; text: string }) => (
  <View style={styles.infoRow}>
    <View style={styles.infoIcon}>
      <Icon name={icon} size={20} color={colors.accent} />
    </View>
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

const EventDetail = ({ event, goBack }: EventDetailProps) => (
  <View style={styles.container}>
    <BackHeader title="Event Details" onBack={goBack} />
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <View style={styles.dateBadge}>
          <Text style={styles.month}>{event.month}</Text>
          <Text style={styles.day}>{event.day}</Text>
        </View>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.subtitle}>{event.description}</Text>
      </View>

      <View style={styles.detailsCard}>
        <InfoRow icon="clock-outline" text={event.time} />
        <View style={styles.divider} />
        <InfoRow icon="map-marker-outline" text={event.location} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About This Event</Text>
        <Text style={styles.body}>{event.fullDescription}</Text>
      </View>

      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonLabel}
        contentStyle={styles.buttonContent}
        onPress={() => {}}
      >
        Register Now
      </Button>

      <View style={{ height: spacing.xl * 2 }} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.md,
  },
  hero: {
    alignItems: "center",
    paddingVertical: spacing.lg,
  },
  dateBadge: {
    width: 80,
    height: 80,
    borderRadius: radius.lg,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  month: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.accentDark,
    letterSpacing: 1,
  },
  day: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.accentDark,
    lineHeight: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: spacing.lg,
  },
  detailsCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.md,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surfaceVariant,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  infoText: {
    fontSize: 15,
    color: colors.text,
    fontWeight: "500",
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.sm,
  },
  body: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: radius.xl,
    marginTop: spacing.lg,
  },
  buttonLabel: {
    color: colors.accentDark,
    fontWeight: "700",
    fontSize: 16,
  },
  buttonContent: {
    paddingVertical: spacing.sm,
  },
});

export default EventDetail;
