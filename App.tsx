import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./src/components/Header";
import BottomNav from "./src/components/BottomNavigation";
import { theme } from "./src/theme/Theme";
import { View, Text } from "react-native";

export default function Main() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Header />
        <BottomNav />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
