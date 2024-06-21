import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardComponent = () => (
  <Card style={{ margin: 10, elevation: 2 }}>
    <Card.Cover
      source={{ uri: "https://picsum.photos/700" }}
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
      <Text variant="titleLarge" style={{ marginVertical: 10 }}>In case you missed it</Text>
      <Text variant="bodySmall">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum
        aperiam adipisci consequuntur quae illum magni quisquam quod ipsa vero
        perferendis, id ea impedit corrupti voluptatibus consequatur voluptatem
        eaque explicabo!
      </Text>
    </Card.Content>
  </Card>
);

export default CardComponent;
