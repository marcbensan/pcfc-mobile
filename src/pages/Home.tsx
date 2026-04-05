import { Divider, Text } from "react-native-paper";
import CardComponent from "../components/Card";
import { FlatList, ScrollView, SectionList, View } from "react-native";
import SubCardComponent from "../components/SubCard";
import { youtubeData } from "../data/YoutubeData";
import EventCard from "../components/EventCard";
import { event } from "../data/EventData";
import LifeGroups from "../components/LifeGroupsCard";
import { ministriesData } from "../data/MinistryData";
import DailyVerse from "../components/DailyVerse";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 15 }}>
      <CardComponent />
      <Text variant="titleLarge" className="mt-8 mb-2">
        Recently Uploaded
      </Text>
      <SectionList
        sections={[{ title: "", data: youtubeData }]}
        renderItem={({ item }) => (
          <SubCardComponent image={item.photo} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Divider className="my-5" />
      <Text variant="titleLarge" style={{ marginBottom: 5 }}>
        Events
      </Text>
      <SectionList
        sections={[{ title: "", data: event }]}
        renderItem={({ item }) => (
          <EventCard title={item.title} description={item.description} />
        )}
      />
      <Divider className="my-5" />
      <Text variant="titleLarge" style={{ marginBottom: 5 }}>
        Life Groups
      </Text>
      <SectionList
        sections={[{ title: "", data: ministriesData }]}
        renderItem={({ item }) => (
          <LifeGroups title={item.title} photo={item.photo} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Divider className="my-5" />
      <Text variant="titleLarge" style={{ marginBottom: 5 }}>
        Daily Verse
      </Text>
      <DailyVerse />
    </ScrollView>
  );
};

export default Home;
