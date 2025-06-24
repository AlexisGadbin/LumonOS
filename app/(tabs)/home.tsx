import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/footer";
import Checklist from "../components/home/checklist";
import HomeHeader from "../components/home/home-header";
import Progress from "../components/home/progress";
import AppTheme from "../theme";

const HomePage = () => {
  const styles = StyleSheet.create({
    contentContainer: {
      padding: 20,
      paddingHorizontal: 40,
      marginTop: 64,
      display: "flex",
      flexDirection: "column",
      gap: 80,
    },
    progressContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
    },
    progressTitle: {
      fontFamily: "VT323",
      fontSize: 32,
      color: AppTheme.colors.primary,
      height: 32,
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <HomeHeader />
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Today&apos;s objectives</Text>
          <Progress progress={28} delay={100} />
          <Progress progress={15} delay={500} />
          <Progress progress={50} delay={1000} />
          <Progress progress={73} delay={1500} />
        </View>
        <Checklist />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default HomePage;
