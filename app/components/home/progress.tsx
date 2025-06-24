import AppTheme from "@/app/theme";
import { useTheme } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ProgressProps {
  progress?: number;
  animationDuration?: number;
  delay?: number;
}

const Progress: React.FC<ProgressProps> = ({
  progress = 75,
  animationDuration = 1000,
  delay = 1000,
}) => {
  const { colors } = useTheme();
  const [containerWidth, setContainerWidth] = React.useState(0);

  const clampedProgress = Math.max(0, Math.min(100, progress));

  const targetWidth = (clampedProgress / 100) * containerWidth;

  const animatedWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      animatedWidth.value = withTiming(targetWidth, {
        duration: animationDuration,
        easing: Easing.bezier(0, 0, 0.01, 1),
      });
    }, delay);
  }, [targetWidth, animationDuration, delay]);

  const styles = StyleSheet.create({
    progressContainer: {
      position: "relative",
      width: "100%",
      height: 32,
      backgroundColor: AppTheme.colors.secondary,
      borderWidth: 1,
      borderColor: colors.primary,
      justifyContent: "center",
      overflow: "hidden",
    },
    progressBar: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      backgroundColor: colors.primary,
    },
    label: {
      fontFamily: "VT323",
      fontSize: 28,
      color: AppTheme.colors.secondary,
      marginLeft: 8,
    },
  });

  return (
    <View
      style={styles.progressContainer}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
      }}
    >
      <Animated.View style={[styles.progressBar, animatedStyle]} />
      <Text style={styles.label}>{progress}%</Text>
    </View>
  );
};

export default Progress;
