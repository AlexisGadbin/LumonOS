import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import AppTheme from "../theme";
import Icons from "./icons";

type TooltipErrorProps = {
  containerStyle?: object;
  onPress?: () => void;
  message: string;
};

const TooltipError = (props: TooltipErrorProps) => {
  const { containerStyle, onPress, message } = props;
  const { width } = Dimensions.get("screen");
  const tooltipWidth = width * 0.8;

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      backgroundColor: AppTheme.colors.primary,
      padding: 16,
      width: tooltipWidth,
      borderColor: AppTheme.colors.secondary2,
      borderWidth: 4,
      shadowColor: AppTheme.colors.secondary2,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      position: "absolute",
      zIndex: 1000,
      left: width / 2 - tooltipWidth / 2,
      ...containerStyle,
    },
    message: {
      fontFamily: "VT323",
      fontSize: 24,
      color: AppTheme.colors.secondary,
      textAlign: "center",
      textTransform: "uppercase",
    },
    textWrapper: {
      position: "relative",
    },
    textStroke: {
      position: "absolute",
      top: 0,
      left: 0,
      textShadowColor: AppTheme.colors.secondary, // ou une autre couleur pour le contour
      textShadowOffset: { width: 0.5, height: 0.5 },
      textShadowRadius: 1,
    },
  });

  return (
    <View style={[styles.container]} onTouchEnd={onPress}>
      <Icons.StopIcon />
      <View style={styles.textWrapper}>
        <Text style={[styles.message, styles.textStroke]}>{message}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default TooltipError;
