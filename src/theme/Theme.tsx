import { MD3LightTheme } from "react-native-paper";

export const colors = {
  background: "#0F0F0F",
  surface: "#1A1A1A",
  surfaceVariant: "#242424",
  primary: "#151515",
  secondary: "#E8D5A3",
  tertiary: "#282828",
  text: "#FFFFFF",
  textSecondary: "#9E9E9E",
  accent: "#E8D5A3",
  divider: "#2A2A2A",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
};

export const theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.tertiary,
    background: colors.background,
    surface: colors.surface,
    onSurface: colors.text,
    onBackground: colors.text,
    outline: colors.divider,
  },
};
