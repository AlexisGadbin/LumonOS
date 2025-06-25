import AppTheme from "@/app/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import TooltipError from "../tooltip-error";
import Fold from "./fold";
import Wheel from "./Wheel";

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
  const wheelRotation = useSharedValue(0);
  const staticRotation = useSharedValue(-180);

  const router = useRouter();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      position: "relative",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: 140,
      transform: [{ translateY: -70 }],
    },
    rectanglesContainer: {
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
    wheelsContainer: {
      position: "absolute",
      bottom: -45,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: 260,
      zIndex: 999,
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

            if (newValue < 0 && newValue > -180) {
              const direction = e.velocityY > 0 ? -1 : 1;
              wheelRotation.value += -direction * 0.1;
            }
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
            } else {
              runOnJS(router.push)("/(tabs)/refinment-wall");
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
      <Fold number={500} name="" rotation={staticRotation} />
      <View style={styles.rectanglesContainer}>
        <View style={styles.rectangles} />
        <View style={styles.rectangles} />
      </View>
      <View style={styles.wheelsContainer}>
        <Wheel rotation={wheelRotation} wheelId="wheel1" />
        <Wheel rotation={wheelRotation} wheelId="wheel2" />
      </View>
    </View>
  );
};

export default Rolodex;
