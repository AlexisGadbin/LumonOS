import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../theme";

const Rewards = () => {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    title: {
      fontFamily: "VT323",
      fontSize: 32,
      color: AppTheme.colors.primary,
      marginBottom: 16,
    },
    subtitle: {
      fontFamily: "VT323",
      fontSize: 20,
      color: AppTheme.colors.text,
      opacity: 0.7,
    },
    card: {
      backgroundColor: AppTheme.colors.card,
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      width: "100%",
      borderWidth: 1,
      borderColor: AppTheme.colors.border,
    },
    cardText: {
      fontFamily: "VT323",
      fontSize: 18,
      color: AppTheme.colors.text,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rewards</Text>
      <Text style={styles.subtitle}>Your rewards will appear here</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardText}>Sample reward card</Text>
      </View>
    </View>
  );
};

export default Rewards;
