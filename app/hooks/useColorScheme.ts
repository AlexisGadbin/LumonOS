import { useColorScheme as useNativeColorScheme } from "react-native";

/**
 * A hook that returns the color scheme preference of the user
 * @returns 'light' | 'dark'
 */
function useColorScheme(): "light" | "dark" {
  const colorScheme = useNativeColorScheme();
  return colorScheme || "dark";
}

export default useColorScheme;
