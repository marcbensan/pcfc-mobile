import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import DailyVerse from "../components/DailyVerse";
import EventCard from "../components/EventCard";
import FeaturedCard from "../components/FeaturedCard";
import MinistryCard from "../components/MinistryCard";
import QuickActions from "../components/QuickActions";
import SectionHeader from "../components/SectionHeader";
import VideoCard from "../components/VideoCard";
import WelcomeBanner from "../components/WelcomeBanner";
import { events } from "../data/EventData";
import { ministriesData } from "../data/MinistryData";
import { youtubeData } from "../data/YoutubeData";
import { colors, spacing } from "../theme/Theme";

const VISIBLE_EVENTS = 3;

interface HomeProps {
  navigate: (screen: string, params?: any) => void;
}

const Home = ({ navigate }: HomeProps) => (
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <WelcomeBanner />
    <FeaturedCard />
    <QuickActions />

    <SectionHeader
      title="Recent Sermons"
      onSeeAll={() => navigate("AllSermons")}
    />
    <FlatList
      data={youtubeData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <VideoCard image={item.photo} title={item.title} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}
    />

    <SectionHeader
      title="Upcoming Events"
      onSeeAll={() => navigate("AllEvents")}
    />
    {events.slice(0, VISIBLE_EVENTS).map((item) => (
      <EventCard
        key={item.id}
        title={item.title}
        description={item.description}
        month={item.month}
        day={item.day}
        onPress={() => navigate("EventDetail", item)}
      />
    ))}

    <SectionHeader
      title="Life Groups"
      onSeeAll={() => navigate("AllLifeGroups")}
    />
    <FlatList
      data={ministriesData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MinistryCard
          title={item.title}
          photo={item.photo}
          onPress={() => navigate("LifeGroupDetail", item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}
    />

    <SectionHeader title="Verse of the Day" />
    <DailyVerse />

    <View style={styles.bottomSpacer} />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.md,
    paddingTop: spacing.lg,
  },
  bottomSpacer: {
    height: spacing.xl,
  },
});

export default Home;
