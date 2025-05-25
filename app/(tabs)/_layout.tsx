import { Tabs } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeIcon from "../components/icons/HomeIcon";
import MessageIcon from "../components/icons/MessageIcon";
import RefinmentIcon from "../components/icons/RefinmentIcon";
import RewardIcon from "../components/icons/RewardIcon";
import AppTheme from "../theme";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  
  const bottomPadding = Platform.OS === "ios" ? insets.bottom : 6;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
    },
    content: {
      flex: 1,
    }
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Tabs
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "#000000",
              borderTopWidth: 0,
              height: 60 + bottomPadding,
              paddingBottom: bottomPadding,
            },
            tabBarActiveTintColor: AppTheme.colors.primary,
            tabBarInactiveTintColor: AppTheme.colors.secondary,
            tabBarActiveBackgroundColor: "#000",
            tabBarInactiveBackgroundColor: "#000",
            tabBarLabelStyle: {
              fontFamily: "VT323",
              fontSize: 16,
            },
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <HomeIcon color={color} size={24} />
              ),
            }}
          />
          <Tabs.Screen
            name="refinment"
            options={{
              tabBarLabel: "Refinment",
              tabBarIcon: ({ color }) => (
                <RefinmentIcon color={color} size={24} />
              ),
            }}
          />
          <Tabs.Screen
            name="message"
            options={{
              tabBarLabel: "Message",
              tabBarIcon: ({ color }) => (
                <MessageIcon color={color} size={24} />
              ),
            }}
          />
          <Tabs.Screen
            name="rewards"
            options={{
              tabBarLabel: "Rewards",
              tabBarIcon: ({ color }) => (
                <RewardIcon color={color} size={24} />
              ),
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}
