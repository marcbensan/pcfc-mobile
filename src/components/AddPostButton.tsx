import * as React from "react";
import { View } from "react-native";
import { FAB } from "react-native-paper";

const AddPostButton = () => (
  <View className="absolute bottom-4 right-4 z-10">
    <FAB
      variant="secondary"
      mode="elevated"
      icon="plus"
      animated={true}
      size="medium"
      onPress={() => console.log("Pressed")}
      className="m-3 bg-secondary z-10"
    />
  </View>
);

export default AddPostButton;
