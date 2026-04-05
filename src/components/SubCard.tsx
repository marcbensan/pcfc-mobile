import { ImageSourcePropType } from "react-native";
import { Card, Text } from "react-native-paper";

interface subCardValues {
  image: ImageSourcePropType;
  title: string;
}

const SubCardComponent = ({ image, title }: subCardValues) => {
  return (
    <Card className="mr-[15px]">
      <Card.Cover
        source={image}
        className="w-[180px] h-[100px] rounded-t-lg rounded-b-lg"
      />
    </Card>
  );
};

export default SubCardComponent;
