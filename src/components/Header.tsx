import * as React from "react";
import { Image } from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = () => {
  const theme = useTheme();
  return (
    <Appbar.Header
      style={{ marginHorizontal: 10, backgroundColor: theme.colors.primary }}
      elevated={true}
    >
      <Image
        source={require("../../assets/logo.svg")}
        style={{ width: 30, height: 30, marginRight: "auto" }}
      />
      <Icon name="account-outline" size={35} color="white" />
    </Appbar.Header>
  );
};

export default Header;
