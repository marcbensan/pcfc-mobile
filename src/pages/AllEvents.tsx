import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BackHeader from "../components/BackHeader";
import EventCard from "../components/EventCard";
import { events } from "../data/EventData";
import { colors, spacing } from "../theme/Theme";

interface AllEventsProps {
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
}

const AllEvents = ({ navigate, goBack }: AllEventsProps) => (
  <View style={styles.container}>
    <BackHeader title="Upcoming Events" onBack={goBack} />
    <ScrollView contentContainerStyle={styles.content}>
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          description={event.description}
          month={event.month}
          day={event.day}
          onPress={() => navigate("EventDetail", event)}
        />
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
});

export default AllEvents;
