import { Surface, Text } from "react-native-paper";

interface EventValues {
  title: string;
  description: string;
}

const EventCard = ({ title, description }: EventValues) => {
  return (
    <Surface
      style={{
        padding: 8,
        height: 80,
        width: "auto",
        marginBottom: 15,
      }}
    >
      <Text variant="titleMedium">{title}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail">
        {description}
      </Text>
    </Surface>
  );
};

export default EventCard;
