import { Text } from "react-native-paper";
import AddPostButton from "../components/AddPostButton";
import Post from "../components/PrayerPosts";
import { ScrollView } from "react-native";

const PrayerRequest = () => {
  return (
    <>
      <AddPostButton />
      <ScrollView>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </>
  );
};

export default PrayerRequest;
