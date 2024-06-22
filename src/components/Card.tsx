import { Avatar, Button, Card, Text } from "react-native-paper";

const photo = require("../../assets/waitAndSee.png");

const CardComponent = () => (
  <Card style={{ elevation: 2 }}>
    <Card.Cover
      source={photo}
      style={{
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
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
      <Text variant="titleLarge" style={{ marginVertical: 10 }}>
        Wait and See | Pastor Mark Dolor | PCFC
      </Text>
      <Text variant="bodySmall">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum
      </Text>
    </Card.Content>
  </Card>
);

export default CardComponent;
