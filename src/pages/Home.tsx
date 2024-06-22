import { Text } from "react-native-paper";
import CardComponent from "../components/Card";
import { FlatList, View } from "react-native";
import SubCardComponent from "../components/SubCard";
import { youtubeData } from "../data/YoutubeData";

const Home = () => {
  return (
    <View style={{ padding: 15 }}>
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
    </View>
  );
};

export default Home;
