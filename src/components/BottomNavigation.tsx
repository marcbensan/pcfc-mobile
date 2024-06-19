import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import Home from "../pages/Home";
import PrayerRequest from "../pages/PrayerRequest";
import Give from "../pages/Give";
import { routes } from "./Routes";

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    prayerRequest: PrayerRequest,
    give: Give,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
