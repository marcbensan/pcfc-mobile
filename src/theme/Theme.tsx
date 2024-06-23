import { MD3LightTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#072448",
    secondary: "#f1e3c1",
    tertiary: "#212021",
  },
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212021",
  },
});
