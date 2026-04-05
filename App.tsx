import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNav from "./src/components/BottomNavigation";
import Header from "./src/components/Header";
import { theme } from "./src/theme/Theme";

export default function Main() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style="light" />
        <Header />
        <BottomNav />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
