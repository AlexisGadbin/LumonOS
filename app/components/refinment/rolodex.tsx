import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import Fold from './fold'

const Rolodex = () => {
  const rotation = useSharedValue(0);

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: 'relative',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    },
  })

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      rotation.value = Math.max(0, Math.min(180, e.translationY));
    })
    .onEnd(() => {
      if (rotation.value > 90) {
        rotation.value = 180;
      } else {
        rotation.value = 0;
      }
    });

  return (
    <GestureDetector gesture={panGesture}>
      <View style={styles.container}>
          <Fold number={4} name="Hue" rotation={rotation}/>
          <Fold number={3} name="Paddington" rotation={rotation}/>
          <Fold number={2} name="Fontenay" rotation={rotation}/>
          <Fold number={1} name="Kerning" rotation={rotation}/>
      </View>
    </GestureDetector>
  )
}

export default Rolodex