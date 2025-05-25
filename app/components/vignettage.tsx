import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';


const Vignettage = () => {
  const { width, height } = Dimensions.get('window');
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: width,
      height: height,
      zIndex: 1,
      pointerEvents: 'none',
    },
  });

      
  return (
    <View style={styles.container}>
    </View>
  );
};

export default Vignettage;