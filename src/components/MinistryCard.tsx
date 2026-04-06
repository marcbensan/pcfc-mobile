import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { radius, spacing } from "../theme/Theme";

interface MinistryCardProps {
  title: string;
  photo: ImageSourcePropType;
  onPress?: () => void;
}

const MinistryCard = ({ title, photo, onPress }: MinistryCardProps) => (
  <TouchableRipple
    onPress={onPress ?? (() => {})}
    borderless
    style={styles.touchable}
  >
    <ImageBackground
      source={photo}
      style={styles.image}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  </TouchableRipple>
);

const styles = StyleSheet.create({
  touchable: {
    borderRadius: radius.md,
    overflow: "hidden",
    marginRight: spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    width: 160,
    height: 200,
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderRadius: radius.md,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: radius.md,
  },
  content: {
    padding: spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default MinistryCard;
