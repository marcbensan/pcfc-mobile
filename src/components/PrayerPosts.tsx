import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { PrayerPost } from "../data/PrayerData";
import { colors, radius, spacing } from "../theme/Theme";

interface PrayerPostCardProps {
  post: PrayerPost;
  isPrayed: boolean;
  isOwned: boolean;
  onPray: (id: string) => void;
  onDelete: (id: string) => void;
}

/** Format relative time, e.g. "2h ago", "1d ago". */
const timeAgo = (timestamp: number): string => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

const PrayerPostCard = ({
  post,
  isPrayed,
  isOwned,
  onPray,
  onDelete,
}: PrayerPostCardProps) => (
  <Card style={styles.card}>
    <Card.Title
      title={post.author}
      titleStyle={styles.author}
      subtitle={timeAgo(post.timestamp)}
      subtitleStyle={styles.time}
      left={() =>
        post.author === "Anonymous" ? (
          <Avatar.Icon
            size={40}
            icon="account"
            style={styles.avatarAnon}
            color={colors.textSecondary}
          />
        ) : (
          <Avatar.Text
            size={40}
            label={post.author.charAt(0).toUpperCase()}
            style={styles.avatarNamed}
            labelStyle={styles.avatarLabel}
          />
        )
      }
      right={() =>
        isOwned ? (
          <TouchableRipple
            onPress={() => onDelete(post.id)}
            borderless
            style={styles.deleteButton}
          >
            <Icon name="trash-can-outline" size={18} color="#ff6b6b" />
          </TouchableRipple>
        ) : null
      }
    />
    <Card.Content>
      <Text style={styles.body}>{post.content}</Text>
    </Card.Content>
    <View style={styles.rowDivider} />
    <View style={styles.actions}>
      <TouchableRipple
        onPress={() => onPray(post.id)}
        borderless
        style={styles.prayButton}
      >
        <View style={styles.prayRow}>
          <Icon
            name={isPrayed ? "hands-pray" : "hands-pray"}
            size={18}
            color={isPrayed ? colors.accent : colors.textSecondary}
          />
          <Text style={[styles.prayText, isPrayed && { color: colors.accent }]}>
            {isPrayed ? "Prayed" : "Pray"}
          </Text>
          <Text style={styles.prayCount}>{post.prayerCount}</Text>
        </View>
      </TouchableRipple>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    overflow: "hidden",
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  author: {
    color: colors.text,
    fontWeight: "600",
    fontSize: 15,
  },
  time: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  avatarAnon: {
    backgroundColor: colors.surfaceVariant,
  },
  avatarNamed: {
    backgroundColor: colors.highlight,
  },
  avatarLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  body: {
    color: colors.accentLight,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  actions: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  prayButton: {
    alignSelf: "flex-start",
    borderRadius: radius.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    marginVertical: 4,
  },
  prayRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginVertical: 4,
  },
  prayText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  prayCount: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 2,
  },
  rowDivider: {
    height: 1,
    backgroundColor: colors.divider,
    marginHorizontal: spacing.md,
  },
  deleteButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
});

export default PrayerPostCard;
