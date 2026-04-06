import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackHeader from "../components/BackHeader";
import { LifeGroupItem } from "../data/MinistryData";
import { colors, radius, spacing } from "../theme/Theme";

interface LifeGroupDetailProps {
  group: LifeGroupItem;
  goBack: () => void;
}

const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) => (
  <View style={styles.infoRow}>
    <View style={styles.infoIcon}>
      <Icon name={icon} size={20} color={colors.accent} />
    </View>
    <View style={styles.infoContent}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const LifeGroupDetail = ({ group, goBack }: LifeGroupDetailProps) => (
  <View style={styles.container}>
    <BackHeader title="Life Group" onBack={goBack} />
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.heroWrapper}>
        <Image
          source={group.photo}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>{group.title}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.body}>{group.description}</Text>
      </View>

      <View style={styles.detailsCard}>
        <InfoRow
          icon="calendar-clock"
          label="Schedule"
          value={group.schedule}
        />
        <View style={styles.divider} />
        <InfoRow icon="account-outline" label="Leader" value={group.leader} />
        <View style={styles.divider} />
        <InfoRow
          icon="map-marker-outline"
          label="Location"
          value={group.location}
        />
      </View>

      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonLabel}
        contentStyle={styles.buttonContent}
        onPress={() => {}}
      >
        Join This Group
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
  heroWrapper: {
    height: 200,
    borderRadius: radius.lg,
    overflow: "hidden",
    marginBottom: spacing.lg,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  heroContent: {
    flex: 1,
    justifyContent: "flex-end",
    padding: spacing.lg,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  section: {
    marginBottom: spacing.lg,
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
  detailsCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
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
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    color: colors.text,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
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

export default LifeGroupDetail;
