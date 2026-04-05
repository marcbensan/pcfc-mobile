import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { colors, radius, spacing } from "../theme/Theme";

interface VideoCardProps {
  image: ImageSourcePropType;
  title: string;
}

const VideoCard = ({ image, title }: VideoCardProps) => (
  <TouchableRipple onPress={() => {}} borderless style={styles.touchable}>
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  </TouchableRipple>
);

const styles = StyleSheet.create({
  touchable: {
    borderRadius: radius.md,
    marginRight: spacing.md,
  },
  container: {
    width: 180,
  },
  image: {
    width: 180,
    height: 110,
    borderRadius: radius.md,
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
    marginTop: spacing.xs + 2,
  },
});

export default VideoCard;
