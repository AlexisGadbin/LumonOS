import { StyleSheet, View } from "react-native";
import Rolodex from "../components/refinment/rolodex";

const RefinmentPage = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Rolodex />
    </View>
  );
};

export default RefinmentPage;
