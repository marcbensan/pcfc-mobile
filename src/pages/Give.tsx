import { Text } from "react-native-paper";
import DonationButton from "../components/Button";
import { View } from "react-native";

const Give = () => {
  return (
    <View className="flex-1 justify-end mx-4 mb-24">
      <View className="my-8">
        <DonationButton />
        <DonationButton />
      </View>
    </View>
  );
};

export default Give;
