import React from 'react';
import { StyleSheet, View } from 'react-native';


const Vignettage = () => {
  
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      // backgroundColor: 'red',
      pointerEvents: 'none',
      zIndex: 99,
    },
  });

      
  return (
    <View style={styles.container}>
    </View>
  );
};

export default Vignettage;