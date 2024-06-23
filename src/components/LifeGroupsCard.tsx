import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const LifeGroups = () => (
  <Card style={{ height: 200, width: 280 }}>
    <View style={styles.imageContainer}>
      <Card.Cover
        source={{ uri: "https://picsum.photos/700" }}
        style={styles.image}
      />
      <Text
        variant="titleLarge"
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          color: "white",
          paddingHorizontal: 5,
          paddingVertical: 2,
        }}
      >
        Kids Ministry
      </Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  image: {
    height: 200,
    width: 280,
  },
  caption: {},
});

export default LifeGroups;
