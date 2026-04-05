import { StyleSheet } from "react-native";
import { Avatar, Card, Paragraph } from "react-native-paper";

const Post = () => {
  return (
    <Card className="m-2">
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

export default Post;
