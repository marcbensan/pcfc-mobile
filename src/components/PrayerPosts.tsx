import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { colors, radius, spacing } from "../theme/Theme";

const Post = () => (
  <Card style={styles.card}>
    <Card.Title
      title="Anonymous"
      titleStyle={styles.title}
      left={() => (
        <Avatar.Icon size={40} icon="account" style={styles.avatar} />
      )}
    />
    <Card.Content>
      <Text style={styles.body} numberOfLines={3}>
        Please pray for my family during this challenging season. We trust in
        God's faithfulness and provision.
      </Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.xs,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
  },
  title: {
    color: colors.text,
    fontWeight: "600",
  },
  avatar: {
    backgroundColor: colors.surfaceVariant,
  },
  body: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Post;
