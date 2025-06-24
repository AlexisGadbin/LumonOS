import AppTheme from "@/app/theme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import TooltipError from "../tooltip-error";
import Fold from "./fold";

const Rolodex = () => {
  const foldNames = ["Kerning", "Fontenay", "Paddington", "Hue"];
  const rotations = [
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
  ];
  const initialRotation = useSharedValue(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      position: "relative",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: 140,
      //Translate y
      transform: [{ translateY: -70 }],
    },
    center: {
      position: "absolute",
      bottom: -33,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: 140,
      zIndex: 999,
    },
    rectangles: {
      width: 16,
      height: 48,
      backgroundColor: AppTheme.colors.primary,
      borderRadius: 41,
    },
  });

  return (
    <View style={styles.container}>
      {showTooltip && (
        <TooltipError
          containerStyle={{
            top: -140,
          }}
          onPress={() => setShowTooltip(false)}
          message="you’re not allowed to access this file outside of the office Come back now!"
        />
      )}
      {foldNames.map((name, index) => {
        const panGesture = Gesture.Pan()
          .onBegin(() => {
            initialRotation.value = rotations[index].value;
          })
          .onUpdate((e) => {
            const base = initialRotation.value === -180 ? -180 : 0;
            const newValue = base - e.translationY;

            rotations[index].value = Math.min(0, Math.max(-180, newValue));
          })
          .onEnd(() => {
            if (rotations[index].value < -90) {
              rotations[index].value = -180;
            } else {
              rotations[index].value = 0;
            }
          });

        const tapGesture = Gesture.Tap().onEnd(() => {
          if (rotations[index].value === 0) {
            if ([0, 1].includes(index)) {
              runOnJS(setShowTooltip)(true);
            }
          }
        });

        const composedGesture = Gesture.Race(panGesture, tapGesture);

        return (
          <GestureDetector key={index} gesture={composedGesture}>
            <Fold number={index + 1} name={name} rotation={rotations[index]} />
          </GestureDetector>
        );
      })}
      <View style={styles.center}>
        <View style={styles.rectangles} />
        <View style={styles.rectangles} />
      </View>
    </View>
  );
};

export default Rolodex;
