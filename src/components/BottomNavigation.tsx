import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Give from "../pages/Give";
import PrayerRequest from "../pages/PrayerRequest";
import { colors, radius, spacing } from "../theme/Theme";
import HomeStack from "../pages/HomeStack";

const BOTTOM_INSET = Platform.OS === "ios" ? 28 : 12;

interface Tab {
  key: string;
  label: string;
  icon: string;
  activeIcon: string;
}

const tabs: Tab[] = [
  { key: "home", label: "Home", icon: "home-outline", activeIcon: "home" },
  {
    key: "prayers",
    label: "Prayers",
    icon: "hands-pray",
    activeIcon: "hands-pray",
  },
  {
    key: "give",
    label: "Giving",
    icon: "hand-coin-outline",
    activeIcon: "hand-coin",
  },
];

interface TabItemProps {
  tab: Tab;
  active: boolean;
  onPress: () => void;
}

const TabItem = React.memo(({ tab, active, onPress }: TabItemProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const bgOpacity = useRef(new Animated.Value(active ? 1 : 0)).current;
  const labelOpacity = useRef(new Animated.Value(active ? 1 : 0)).current;
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    Animated.parallel([
      Animated.timing(bgOpacity, {
        toValue: active ? 1 : 0,
        duration: 220,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
      Animated.timing(labelOpacity, {
        toValue: active ? 1 : 0,
        duration: active ? 260 : 120,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  }, [active]);

  const handlePressIn = () =>
    Animated.spring(scaleAnim, {
      toValue: 0.87,
      useNativeDriver: true,
      speed: 60,
      bounciness: 0,
    }).start();

  const handlePressOut = () =>
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 35,
      bounciness: 6,
    }).start();

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityLabel={tab.label}
    >
      <Animated.View
        style={[styles.tab, { transform: [{ scale: scaleAnim }] }]}
      >
        {/* Animated navy fill — fades in behind icon+label */}
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            styles.activeBg,
            { opacity: bgOpacity },
          ]}
        />
        <Icon
          name={active ? tab.activeIcon : tab.icon}
          size={20}
          color={active ? colors.accent : colors.textSecondary}
        />
        {active && (
          <Animated.Text style={[styles.label, { opacity: labelOpacity }]}>
            {tab.label}
          </Animated.Text>
        )}
      </Animated.View>
    </Pressable>
  );
});

const BottomNav = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.root}>
      <View style={[styles.scene, index !== 0 && styles.hidden]}>
        <HomeStack />
      </View>
      <View style={[styles.scene, index !== 1 && styles.hidden]}>
        <PrayerRequest />
      </View>
      <View style={[styles.scene, index !== 2 && styles.hidden]}>
        <Give />
      </View>

      <View style={styles.navWrapper}>
        <View style={styles.tabBar}>
          {tabs.map((tab, i) => (
            <TabItem
              key={tab.key}
              tab={tab}
              active={index === i}
              onPress={() => setIndex(i)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  scene: { flex: 1 },
  hidden: { display: "none" },
  navWrapper: {
    paddingHorizontal: spacing.xl,
    paddingBottom: BOTTOM_INSET,
    paddingTop: 10,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    padding: 5,
    gap: 4,
    borderWidth: 1,
    borderColor: colors.divider,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
      },
      android: { elevation: 10 },
    }),
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: radius.full,
    gap: 7,
    minWidth: 52,
    overflow: "hidden",
  },
  activeBg: {
    backgroundColor: colors.accentDark,
    borderRadius: radius.full,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.accent,
    letterSpacing: 0.2,
  },
});

export default BottomNav;
