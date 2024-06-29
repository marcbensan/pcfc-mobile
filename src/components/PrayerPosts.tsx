import { View, StyleSheet } from "react-native";
import {
  Card,
  Avatar,
  Title,
  Paragraph,
  Button,
  Divider,
} from "react-native-paper";

const Post = () => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title="John Doe"
        left={() => (
          <Avatar.Image size={40} source={require("../../assets/adult.png")} />
        )}
      />
      <Card.Content>
        <Paragraph numberOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          soluta hic eveniet! Molestiae quis consequatur maxime! Quibusdam sit
          aliquam, similique porro ipsum facere nemo eum quis veritatis, quo
          numquam repudiandae!
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});

export default Post;
