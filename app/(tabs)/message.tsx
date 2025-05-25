import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../theme";

const Message = () => {
  const { colors } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppTheme.colors.secondary,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    title: {
      fontFamily: "VT323",
      fontSize: 32,
      color: colors.primary,
      marginBottom: 16,
    },
    subtitle: {
      fontFamily: "VT323",
      fontSize: 20,
      color: colors.text,
      opacity: 0.7,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.subtitle}>Your messages will appear here</Text>
    </View>
  );
};

export default Message;
