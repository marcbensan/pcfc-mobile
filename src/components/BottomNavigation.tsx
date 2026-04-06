import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Give from "../pages/Give";
import HomeStack from "../pages/HomeStack";
import PrayerRequest from "../pages/PrayerRequest";
import { routes } from "../routes/Routes";
import { colors } from "../theme/Theme";

const renderScene = BottomNavigation.SceneMap({
  home: HomeStack,
  prayers: PrayerRequest,
  give: Give,
});

const BottomNav = () => {
  const [index, setIndex] = useState(0);

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: colors.primary }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      inactiveColor={colors.textSecondary}
      activeColor={colors.accent}
      activeIndicatorStyle={{
        backgroundColor: colors.tertiary,
        borderRadius: 20,
      }}
    />
  );
};

export default BottomNav;
