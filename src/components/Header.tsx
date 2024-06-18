import * as React from "react";
import { Image } from "react-native";
import { Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Appbar.Header style={{ marginHorizontal: 10 }} elevated={true}>
      <Image
        source={require(logo)}
        style={{ width: 30, height: 30, marginRight: "auto" }}
      />
      <Icon name="account-circle" size={30} color="#000" />
    </Appbar.Header>
  );
};

export default Header;
