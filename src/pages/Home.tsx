import { Divider, Text } from "react-native-paper";
import CardComponent from "../components/Card";
import { FlatList, ScrollView, View } from "react-native";
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
      <Text variant="titleLarge" style={{ marginTop: 35, marginBottom: 5 }}>
        Recently Uploaded
      </Text>
      <FlatList
        data={youtubeData}
        renderItem={({ item }) => (
          <SubCardComponent image={item.photo} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Divider style={{ marginVertical: 20 }} />
      <Text variant="titleLarge" style={{ marginBottom: 5 }}>
        Events
      </Text>
      <FlatList
        data={event}
        renderItem={({ item }) => (
          <EventCard title={item.title} description={item.description} />
        )}
      />
      <Divider style={{ marginVertical: 20 }} />
      <Text variant="titleLarge" style={{ marginBottom: 5 }}>
        Life Groups
      </Text>
      <FlatList
        data={ministriesData}
        renderItem={({ item }) => (
          <LifeGroups title={item.title} photo={item.photo} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Divider style={{ marginVertical: 20 }} />
      <DailyVerse/>
    </ScrollView>
  );
};

export default Home;
