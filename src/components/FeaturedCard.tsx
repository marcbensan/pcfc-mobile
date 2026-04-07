import React from "react";
import { ImageBackground, Platform, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, radius, spacing } from "../theme/Theme";
import AnimatedPressable from "./AnimatedPressable";

const photo = require("../../assets/waitAndSee.png");

const FeaturedCard = () => (
  <AnimatedPressable
    onPress={() => {}}
    style={styles.touchable}
    testID="featured-card"
    scale={0.98}
  >
    <ImageBackground
      source={photo}
      style={styles.image}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.overlay} />
      <View style={styles.playButton}>
        <Icon name="play-circle" size={56} color="rgba(255,255,255,0.9)" />
      </View>
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>LATEST SERMON</Text>
        </View>
        <Text style={styles.title}>Wait and See</Text>
        <Text style={styles.subtitle}>Pastor Mark Dolor · PCFC</Text>
      </View>
    </ImageBackground>
  </AnimatedPressable>
);

const styles = StyleSheet.create({
  touchable: {
    borderRadius: radius.lg,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  image: {
    height: 220,
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderRadius: radius.lg,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: radius.lg,
  },
  playButton: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: spacing.md,
  },
  badge: {
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.sm,
    alignSelf: "flex-start",
    marginBottom: spacing.sm,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: colors.primary,
    letterSpacing: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
  },
});

export default FeaturedCard;
