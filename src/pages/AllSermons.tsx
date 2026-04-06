import React from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackHeader from "../components/BackHeader";
import { youtubeData } from "../data/YoutubeData";
import { colors, radius, spacing } from "../theme/Theme";

interface AllSermonsProps {
  goBack: () => void;
}

const THUMB_SIZE = 100;

const AllSermons = ({ goBack }: AllSermonsProps) => (
  <View style={styles.container}>
    <BackHeader title="Recent Sermons" onBack={goBack} />
    <ScrollView contentContainerStyle={styles.content}>
      {youtubeData.map((sermon) => (
        <Pressable
          key={sermon.id}
          style={({ pressed }) => [styles.card, pressed && styles.pressed]}
        >
          <View style={styles.thumbnailWrapper}>
            <Image
              source={sermon.photo}
              style={styles.thumbnail}
              resizeMode="cover"
            />
            <View style={styles.scrim} />
            <View style={styles.playIcon}>
              <Icon name="play" size={20} color="#fff" />
            </View>
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>{sermon.duration}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>
              {sermon.title}
            </Text>
            <Text style={styles.speaker}>{sermon.speaker}</Text>
            <Text style={styles.date}>{sermon.date}</Text>
          </View>
        </Pressable>
      ))}
      <View style={{ height: spacing.xl }} />
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
  card: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: { elevation: 2 },
    }),
  },
  pressed: {
    opacity: 0.75,
  },
  thumbnailWrapper: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    backgroundColor: colors.surfaceVariant,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -16,
    marginLeft: -16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  durationBadge: {
    position: "absolute",
    bottom: 4,
    right: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  durationText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#fff",
  },
  info: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
  },
  speaker: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: "600",
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default AllSermons;
