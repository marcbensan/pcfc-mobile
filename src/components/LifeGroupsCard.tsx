import { View, ImageSourcePropType } from "react-native";
import { Card, Text } from "react-native-paper";

interface lifeGroupsParams {
  title: string;
  photo: ImageSourcePropType;
}

const LifeGroups = ({ title, photo }: lifeGroupsParams) => (
  <Card style={{ height: 200, width: 280, marginRight: 10 }}>
    <View>
      <Card.Cover source={photo} />
      <Text
        variant="titleLarge"
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          color: "white",
          backgroundColor: "rgba(60, 60, 60, 0.5)",
          paddingHorizontal: 5,
          paddingVertical: 2,
        }}
      >
        {title}
      </Text>
    </View>
  </Card>
);

export default LifeGroups;
