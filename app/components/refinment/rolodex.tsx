import AppTheme from "@/app/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
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

        return (
          <GestureDetector key={index} gesture={panGesture}>
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
