import { Tabs } from "expo-router";
import { Image, Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeIcon from "../components/icons/HomeIcon";
import MessageIcon from "../components/icons/MessageIcon";
import RefinmentIcon from "../components/icons/RefinmentIcon";
import RewardIcon from "../components/icons/RewardIcon";
import Vignettage from "../components/vignettage";
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
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 1000000,
      pointerEvents: "none",
    },
  });

  return (
    <View
      style={{
        flex: 1,
        inset: 0,
      }}
    >
      <Image
        source={require("../../assets/images/CRT.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Vignettage />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#000",
          opacity: 0.15,
        }}
      />
      <Vignettage />
      <View style={styles.container}>
        <View style={styles.content}>
          <Tabs
            screenOptions={{
              tabBarStyle: {
                backgroundColor: "transparent",
                borderTopWidth: 0,
                height: 60 + bottomPadding,
                paddingBottom: bottomPadding,
                zIndex: 1000,
              },
              tabBarActiveTintColor: AppTheme.colors.primary,
              tabBarInactiveTintColor: AppTheme.colors.secondary,
              tabBarActiveBackgroundColor: "transparent",
              tabBarInactiveBackgroundColor: "transparent",
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
                tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />,
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
                tabBarLabel: "Reward",
                tabBarIcon: ({ color }) => (
                  <RewardIcon color={color} size={24} />
                ),
              }}
            />
            <Tabs.Screen
              name="refinment-wall"
              options={{
                href: null,
                headerShown: false,
              }}
            />
          </Tabs>
        </View>
      </View>
    </View>
  );
}
