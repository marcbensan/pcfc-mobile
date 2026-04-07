import React, { useRef } from "react";
import { Animated, Pressable, StyleProp, ViewStyle } from "react-native";

interface AnimatedPressableProps {
  onPress?: () => void;
  /** Applied to the outer Pressable (layout, margin, overflow, etc.) */
  style?: StyleProp<ViewStyle>;
  /** Applied to the inner Animated.View — use when children need flex layout */
  innerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  /** Target scale on pressIn, default 0.96 */
  scale?: number;
  testID?: string;
  disabled?: boolean;
}

const AnimatedPressable: React.FC<AnimatedPressableProps> = ({
  onPress,
  style,
  innerStyle,
  children,
  scale = 0.96,
  testID,
  disabled,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () =>
    Animated.spring(scaleAnim, {
      toValue: scale,
      useNativeDriver: true,
      speed: 60,
      bounciness: 0,
    }).start();

  const handlePressOut = () =>
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 40,
      bounciness: 3,
    }).start();

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={style}
      testID={testID}
      disabled={disabled}
    >
      <Animated.View
        style={[innerStyle, { transform: [{ scale: scaleAnim }] }]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default AnimatedPressable;
