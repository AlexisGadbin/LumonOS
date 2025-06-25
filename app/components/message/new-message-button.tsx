import AppTheme from "@/app/theme";
import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import TooltipError from "../tooltip-error";

const NewMessageButton = () => {
  const { width } = Dimensions.get("screen");
  const buttonWidth = width * 0.8;

  const [displayTooltipError, setDisplayTooltipError] = useState(false);

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: AppTheme.colors.secondary,
      padding: 16,
      width: buttonWidth,
      borderColor: AppTheme.colors.primary,
      borderWidth: 2,
      borderBottomWidth: 8,
      zIndex: 1000,
    },
    message: {
      fontFamily: "VT323",
      fontSize: 24,
      color: AppTheme.colors.primary,
      textAlign: "center",
      textTransform: "uppercase",
    },
  });

  return (
    <View>
      {displayTooltipError && (
        <TooltipError
          message="you’re not allowed to write message before morning tasks"
          onPress={() => setDisplayTooltipError(false)}
          containerStyle={{
            left: null,
            bottom: 80,
          }}
        />
      )}
      <Pressable
        style={styles.container}
        onPress={() => {
          setDisplayTooltipError(true);
          setTimeout(() => {
            setDisplayTooltipError(false);
          }, 3000);
        }}
      >
        <Text style={styles.message}>Write a new message</Text>
      </Pressable>
    </View>
  );
};

export default NewMessageButton;
