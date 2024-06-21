import * as React from "react";
import { BottomNavigation, useTheme } from "react-native-paper";
import Home from "../pages/Home";
import PrayerRequest from "../pages/PrayerRequest";
import Give from "../pages/Give";
import { routes } from "../routes/Routes";

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const theme = useTheme();

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    prayers: PrayerRequest,
    give: Give,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: theme.colors.primary }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      inactiveColor="#efeee9"
      activeColor="white"
      activeIndicatorStyle={{
        backgroundColor: "#041327",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}
    />
  );
};

export default BottomNav;
