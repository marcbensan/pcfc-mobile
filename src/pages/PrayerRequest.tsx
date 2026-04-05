import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AddPostButton from "../components/AddPostButton";
import Post from "../components/PrayerPosts";
import { colors, spacing } from "../theme/Theme";

const PrayerRequest = () => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
    <AddPostButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingVertical: spacing.sm,
  },
});

export default PrayerRequest;
