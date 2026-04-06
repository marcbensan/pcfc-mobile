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
import BackHeader from "../components/BackHeader";
import { ministriesData } from "../data/MinistryData";
import { colors, radius, spacing } from "../theme/Theme";

interface AllLifeGroupsProps {
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
}

const AllLifeGroups = ({ navigate, goBack }: AllLifeGroupsProps) => (
  <View style={styles.container}>
    <BackHeader title="Life Groups" onBack={goBack} />
    <ScrollView contentContainerStyle={styles.content}>
      {ministriesData.map((group) => (
        <Pressable
          key={group.id}
          onPress={() => navigate("LifeGroupDetail", group)}
          style={({ pressed }) => [styles.card, pressed && styles.pressed]}
        >
          <Image source={group.photo} style={styles.image} resizeMode="cover" />
          <View style={styles.overlay} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{group.title}</Text>
            <Text style={styles.schedule}>{group.schedule}</Text>
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
    height: 160,
    borderRadius: radius.lg,
    overflow: "hidden",
    marginBottom: spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: { elevation: 4 },
    }),
  },
  pressed: {
    opacity: 0.8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  cardContent: {
    flex: 1,
    justifyContent: "flex-end",
    padding: spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  schedule: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    fontWeight: "500",
  },
});

export default AllLifeGroups;
