import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../theme";
import LumonGlobeIcon from "./icons/LumonGlobeIcon";

const Footer = () => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
    },
    dividerContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      width: "100%",
    },
    divider: {
      width: "100%",
      height: 2,
      backgroundColor: AppTheme.colors.primary,
    },
    text: {
      fontFamily: "VT323",
      fontSize: 16,
      color: AppTheme.colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <View style={styles.divider} />
        <View style={styles.divider} />
        <View style={styles.divider} />
      </View>
      <LumonGlobeIcon />
      <Text style={styles.text}>
        Thank you for you commitment to Lumon industries!
      </Text>
    </View>
  );
};

export default Footer;
