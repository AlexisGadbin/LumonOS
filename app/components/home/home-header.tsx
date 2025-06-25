import AppTheme from "@/app/theme/navigationTheme";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../avatar";

const HomeHeader = () => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      borderBottomWidth: 2,
      borderBottomColor: AppTheme.colors.primary,
      paddingBottom: 8,
    },
    title: {
      fontFamily: "VT323",
      fontSize: 24,
      color: AppTheme.colors.primary,
    },
    name: {
      fontFamily: "VT323",
      fontSize: 48,
      color: AppTheme.colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Good morning</Text>
        <Text style={styles.name}>Basti U.</Text>
      </View>
      <Avatar />
    </View>
  );
};

export default HomeHeader;
