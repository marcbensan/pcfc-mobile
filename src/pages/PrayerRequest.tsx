import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AddPostButton from "../components/AddPostButton";
import NewPrayerModal from "../components/NewPrayerModal";
import PrayerPostCard from "../components/PrayerPosts";
import { mockPrayerPosts, PrayerPost } from "../data/PrayerData";
import { colors, radius, spacing } from "../theme/Theme";
import { getPrayedPosts, togglePrayed } from "../utils/storage";

const PrayerRequest = () => {
  const [posts, setPosts] = useState<PrayerPost[]>(mockPrayerPosts);
  const [prayedSet, setPrayedSet] = useState<Set<string>>(new Set());
  const [ownedIds, setOwnedIds] = useState<Set<string>>(new Set());
  const [modalVisible, setModalVisible] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getPrayedPosts().then(setPrayedSet);
  }, []);

  const handlePray = useCallback(async (postId: string) => {
    const nowPrayed = await togglePrayed(postId);
    setPrayedSet((prev) => {
      const next = new Set(prev);
      if (nowPrayed) next.add(postId);
      else next.delete(postId);
      return next;
    });
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, prayerCount: p.prayerCount + (nowPrayed ? 1 : -1) }
          : p,
      ),
    );
  }, []);

  const handleNewPost = useCallback((content: string, author: string) => {
    const newPost: PrayerPost = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      content,
      author,
      timestamp: Date.now(),
      prayerCount: 0,
    };
    setPosts((prev) => [newPost, ...prev]);
    setOwnedIds((prev) => new Set(prev).add(newPost.id));
    setModalVisible(false);
  }, []);

  const handleRequestDelete = useCallback((postId: string) => {
    setPendingDeleteId(postId);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (!pendingDeleteId) return;
    setPosts((prev) => prev.filter((p) => p.id !== pendingDeleteId));
    setOwnedIds((prev) => {
      const next = new Set(prev);
      next.delete(pendingDeleteId);
      return next;
    });
    setPendingDeleteId(null);
  }, [pendingDeleteId]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate network refresh — in production this would fetch from API
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>Prayer Wall</Text>
            <Text style={styles.headerSubtitle}>
              Resets weekly · {posts.length} requests
            </Text>
          </View>
          <View style={styles.headerBadge}>
            <Icon name="hands-pray" size={22} color={colors.accent} />
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={colors.accent}
            colors={[colors.accent]}
            progressBackgroundColor={colors.surface}
          />
        }
      >
        {posts.length === 0 ? (
          <View style={styles.empty}>
            <Icon name="hands-pray" size={48} color={colors.textSecondary} />
            <Text style={styles.emptyText}>No prayer requests yet</Text>
            <Text style={styles.emptySubtext}>
              Be the first to share a prayer
            </Text>
          </View>
        ) : (
          posts.map((post) => (
            <PrayerPostCard
              key={post.id}
              post={post}
              isPrayed={prayedSet.has(post.id)}
              isOwned={ownedIds.has(post.id)}
              onPray={handlePray}
              onDelete={handleRequestDelete}
            />
          ))
        )}
        <View style={{ height: spacing.xl * 2 }} />
      </ScrollView>
      <AddPostButton onPress={() => setModalVisible(true)} />
      <NewPrayerModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        onSubmit={handleNewPost}
      />
      <Portal>
        <Dialog
          visible={pendingDeleteId !== null}
          onDismiss={() => setPendingDeleteId(null)}
          style={styles.dialog}
        >
          <Dialog.Title style={styles.dialogTitle}>
            Delete Prayer Request?
          </Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogBody}>
              This will permanently remove your prayer request from the wall.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => setPendingDeleteId(null)}
              textColor={colors.textSecondary}
            >
              Cancel
            </Button>
            <Button onPress={handleConfirmDelete} textColor="#ff6b6b">
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.divider,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  dialog: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    marginHorizontal: spacing.md,
  },
  dialogTitle: {
    color: colors.text,
  },
  dialogBody: {
    color: colors.textSecondary,
  },
  content: {
    paddingVertical: spacing.xs,
  },
  empty: {
    alignItems: "center",
    paddingTop: spacing.xl * 3,
    gap: spacing.sm,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default PrayerRequest;
