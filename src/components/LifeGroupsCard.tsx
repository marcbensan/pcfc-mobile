import { View, ImageSourcePropType } from "react-native";
import { Card, Text } from "react-native-paper";

interface lifeGroupsParams {
  title: string;
  photo: ImageSourcePropType;
}

const LifeGroups = ({ title, photo }: lifeGroupsParams) => (
  <Card className="w-[280px] h-[200px] mr-2.5">
    <View className="relative">
      <Card.Cover source={photo} />
      <Text
        variant="titleLarge"
        className="absolute bottom-2.5 left-2.5 text-white bg-gray-800/50 px-2 py-1"
      >
        {title}
      </Text>
    </View>
  </Card>
);

export default LifeGroups;
