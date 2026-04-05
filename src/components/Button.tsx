import React from "react";
import { Button } from "react-native-paper";

export default function DonationButton(title: string) {
  return (
    <Button
      mode="outlined"
      compact={true}
      onPress={() => console.log("Pressed")}
    >
      PayPal
    </Button>
  );
}
