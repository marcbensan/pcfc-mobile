import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./src/components/Header";
import BottomNav from "./src/components/BottomNavigation";

export default function Main() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Header />
        <BottomNav />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
