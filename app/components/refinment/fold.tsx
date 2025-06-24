import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import Svg, { Path, Text as SvgText } from "react-native-svg";
import AppTheme from "../../theme";

type Props = {
  number: number;
  name: string;
  rotation: SharedValue<number>;
};

const Fold = (props: Props) => {
  const { number, name, rotation } = props;
  const width = 220;
  const height = 140;

  const styles = StyleSheet.create({
    fold: {
      width: width,
      height: height,
      position: "absolute",
      transformOrigin: "bottom",
    },
    container: {
      width: width,
      height: height,
      borderWidth: 4,
      borderColor: AppTheme.colors.primary,
      backgroundColor: AppTheme.colors.secondary,
      borderRadius: 16,
      position: "relative",
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    tab: {
      position: "absolute",
      top: -18,
      left: (number * width) / 6 - width / 6,
      zIndex: 0,
    },
    name: {
      fontFamily: "VT323",
      fontSize: 40,
      color: AppTheme.colors.primary,
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    const rotateX = `${rotation.value}deg`; // entre 0 et -180
    const zIndex = -number;
    return {
      transform: [
        { perspective: 800 },
        { translateY: 10 },
        { rotateX },
        { translateY: -10 },
      ],
      zIndex: zIndex,
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: rotation.value <= -90 ? 0 : 1,
    };
  });

  return (
    <Animated.View style={[styles.fold, animatedStyle]}>
      <Svg width={width / 4} height={24} viewBox="0 0 66 32" style={styles.tab}>
        <Path
          d="M46.1699 2L46.4795 2.00586C49.6596 2.12273 52.1889 4.03033 54.0986 6.3457C56.0802 8.74816 57.6318 11.8616 58.8154 14.8398C60.0079 17.8404 60.874 20.8234 61.4404 23.0449C61.7245 24.1589 61.9349 25.0895 62.0752 25.7441C62.1453 26.0714 62.1979 26.3307 62.2334 26.5098C62.2511 26.5991 62.2642 26.6686 62.2734 26.7168C62.278 26.741 62.2817 26.7601 62.2842 26.7734C62.2854 26.78 62.2864 26.7852 62.2871 26.7891C62.2875 26.791 62.2879 26.7927 62.2881 26.7939V26.7949C62.2834 26.7963 62.1885 26.8151 60.3213 27.1582L62.2891 26.7969L62.7227 29.1582H2.59863L3.0332 26.7969L5 27.1582C3.03293 26.7968 3.0331 26.7955 3.0332 26.7949V26.7939C3.03343 26.7927 3.03382 26.791 3.03418 26.7891C3.03489 26.7852 3.03589 26.78 3.03711 26.7734C3.0396 26.7601 3.04325 26.741 3.04785 26.7168C3.05705 26.6686 3.07021 26.5991 3.08789 26.5098C3.12334 26.3307 3.17598 26.0714 3.24609 25.7441C3.38636 25.0895 3.59781 24.1589 3.88184 23.0449C4.44827 20.8235 5.31339 17.8403 6.50586 14.8398C7.68951 11.8616 9.24112 8.74817 11.2227 6.3457C13.194 3.95555 15.8261 1.9999 19.1523 2H46.1699Z"
          fill={AppTheme.colors.primary}
          stroke={AppTheme.colors.secondary}
          strokeWidth={4}
        />
        <SvgText
          x="33"
          y="22"
          fontSize="20"
          fontWeight="bold"
          fill={AppTheme.colors.background}
          fontFamily="VT323"
          textAnchor="middle"
        >
          {number}
        </SvgText>
      </Svg>
      <View style={styles.container}>
        <Animated.Text style={[styles.name, textStyle]}>{name}</Animated.Text>
      </View>
    </Animated.View>
  );
};

export default Fold;
