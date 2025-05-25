import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Reward } from "../../utils/types";
import Footer from "../components/footer";
import RewardCard from "../components/rewards/reward-card";
import AppTheme from "../theme";


const rewards: Reward[] = [
  {
    id: "1",
    name: "Wellness Session",
    image: "wellness",
    isUnlocked: true,
    price: 200,
  },
  {
    id: "2",
    name: "Balloons",
    image: "balloons",
    isUnlocked: true,
    price: 400,
  },
  {
    id: "3",
    name: "Melon Party",
    image: "melon",
    isUnlocked: true,
    price: 1200,
  },
  {
    id: "4",
    name: "Finger Trap",
    image: "trap",
    isUnlocked: false,
    price: 2400,
  },
  {
    id: "5",
    name: "Dance Party",
    image: "dance",
    isUnlocked: false,
    price: 8000,
  },
  {
    id: "6",
    name: "Mountain Camping",
    image: "camping",
    isUnlocked: false,
    price: 12000,
  },
  {
    id: "7",
    name: "Secret Reward",
    image: "secret",
    isUnlocked: false,
    price: 99999,
  }
];

const RewardsPage = () => {
  
  const styles = StyleSheet.create({
    contentContainer: {
      padding: 20,
      paddingHorizontal: 40,
      marginTop: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
    },
    title: {
      fontFamily: "VT323",
      fontSize: 24,
      color: AppTheme.colors.primary,
      height: 24,
    },
    count: {
      fontFamily: "VT323",
      fontSize: 48,
      color: AppTheme.colors.primary,
      height: 48,
    },
    divider: {
      height: 2,
      backgroundColor: AppTheme.colors.primary,
      width: '100%',
    },
    rewardsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* <Vignettage /> */}
        <Text style={styles.title}>Rewards</Text>
        <Text style={styles.count}>
          {rewards.filter(r => r.isUnlocked).length}/{rewards.length} unlocked
        </Text>
        <View style={styles.divider}/>
        <View style={styles.rewardsContainer}>
          {rewards.map((reward) => (
            <RewardCard key={reward.id} reward={reward} />
          ))}
        </View>
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default RewardsPage;
