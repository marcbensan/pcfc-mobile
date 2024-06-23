import { ImageSourcePropType } from "react-native";
import { Card, Text } from "react-native-paper";

interface subCardValues {
  image: ImageSourcePropType;
  title: string;
}

const SubCardComponent = ({ image, title }: subCardValues) => {
  return (
    <Card
      style={{
        elevation: 2,
        marginRight: 15,
      }}
    >
      <Card.Cover
        source={image}
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          width: 180,
          height: 100,
        }}
      />
      <Card.Content
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Text variant="titleSmall" style={{ marginLeft: -12, marginTop: 5 }}>
          {title}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default SubCardComponent;
