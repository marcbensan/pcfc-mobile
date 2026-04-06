import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { colors } from "../theme/Theme";

const Header = () => (
  <Appbar.Header style={styles.header} elevated>
    <Image source={require("../../assets/icon.png")} style={styles.logo} />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
  },
  logo: {
    width: 32,
    height: 32,
  },
});

export default Header;
