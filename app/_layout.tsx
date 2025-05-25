import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { AppTheme } from "./theme";

export default function RootLayout() {
    const [loaded] = useFonts({
      VT323: require('../assets/fonts/VT323-Regular.ttf'),
    });
  
    if (!loaded) {
      // Async font loading only occurs in development.
      return null;
    }

    
  return (
    <ThemeProvider value={AppTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
