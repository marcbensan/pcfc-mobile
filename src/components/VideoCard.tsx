import React from "react";
import {
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, radius, spacing } from "../theme/Theme";

// Matches a 16:9 aspect ratio — the standard for video thumbnails
const CARD_WIDTH = 200;
const THUMBNAIL_HEIGHT = Math.round(CARD_WIDTH * (9 / 16));

interface VideoCardProps {
  image: ImageSourcePropType;
  title: string;
  /** Optional label shown in the top-left corner, e.g. "NEW" */
  badge?: string;
  onPress?: () => void;
}

const VideoCard = ({ image, title, badge, onPress }: VideoCardProps) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [styles.container, pressed && styles.pressed]}
  >
    {/* ── Thumbnail ─────────────────────────────── */}
    <View style={styles.thumbnailWrapper}>
      <Image source={image} style={styles.thumbnail} resizeMode="cover" />

      {/* Gradient-like dark scrim so overlay elements are always legible */}
      <View style={styles.scrim} />

      {/* Centred play button */}
      <View style={styles.playButton}>
        <Icon name="play" size={20} color="#fff" />
      </View>

      {/* Optional badge — top-left */}
      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}

      {/* Duration pill — bottom-right (placeholder, wire up real data later) */}
      <View style={styles.duration}>
        <Text style={styles.durationText}>WATCH</Text>
      </View>
    </View>

    {/* ── Metadata ──────────────────────────────── */}
    <View style={styles.meta}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.channel}>PCFC · Sermon</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    marginRight: spacing.md,
  },
  pressed: {
    opacity: 0.75,
  },

  // ── Thumbnail ──
  thumbnailWrapper: {
    width: CARD_WIDTH,
    height: THUMBNAIL_HEIGHT,
    borderRadius: radius.md,
    overflow: "hidden",
    backgroundColor: colors.surfaceVariant,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.18)",
  },

  // ── Play button ──
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -18,
    marginLeft: -18,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Badge (top-left) ──
  badge: {
    position: "absolute",
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: colors.accent,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "800",
    color: colors.primary,
    letterSpacing: 0.8,
  },

  // ── Duration / label pill (bottom-right) ──
  duration: {
    position: "absolute",
    bottom: spacing.sm,
    right: spacing.sm,
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.5,
  },

  // ── Metadata ──
  meta: {
    marginTop: spacing.sm,
    paddingHorizontal: 2,
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
    lineHeight: 18,
  },
  channel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 3,
  },
});

export default VideoCard;
