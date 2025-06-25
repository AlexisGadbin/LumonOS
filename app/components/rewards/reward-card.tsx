import AppTheme from "@/app/theme";
import { Reward } from "@/utils/types";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  reward: Reward;
};

const getRewardImage = (imageName: string) => {
  switch (imageName) {
    case "wellness":
      return require("../../../assets/rewards/wellness.png");
    case "balloons":
      return require("../../../assets/rewards/balloons.png");
    case "melon":
      return require("../../../assets/rewards/melon.png");
    case "trap":
      return require("../../../assets/rewards/trap.png");
    case "dance":
      return require("../../../assets/rewards/dance.png");
    case "camping":
      return require("../../../assets/rewards/camping.png");
    case "secret":
      return require("../../../assets/rewards/secret.png");
    default:
      return require("../../../assets/rewards/secret.png");
  }
};

const RewardCard = (props: Props) => {
  const { reward } = props;

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: 4,
      width: "48%",
      marginTop: 32,
      position: "relative",
    },
    name: {
      fontFamily: "VT323",
      fontSize: 24,
      color: AppTheme.colors.primary,
    },
    price: {
      fontFamily: "VT323",
      opacity: 0.6,
      fontSize: 18,
      color: AppTheme.colors.primary,
    },
    image: {
      width: "100%",
      height: 184,
      borderColor: AppTheme.colors.primary,
    },
    unlocked: {
      position: "absolute",
      bottom: 8,
      right: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ position: "relative", width: "100%" }}>
        <Image
          source={getRewardImage(reward.image)}
          style={{
            ...styles.image,
            borderWidth: reward.isUnlocked ? 2 : 0,
          }}
          resizeMode="cover"
        />
        {reward.isUnlocked && (
          <Ionicons
            name="checkbox"
            size={24}
            color={AppTheme.colors.primary}
            style={styles.unlocked}
          />
        )}
      </View>
      <Text style={styles.name}>{reward.name}</Text>
      <Text style={styles.price}>{reward.price} pts</Text>
    </View>
  );
};

export default RewardCard;
