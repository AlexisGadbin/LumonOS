import React from 'react'
import { StyleSheet, View } from 'react-native'
import Fold from './fold'

const Rolodex = () => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    },
  })
  return (
    <View style={styles.container}>
        <Fold number={1} name="Kerning" />
        <Fold number={2} name="Fontenay" />
        <Fold number={3} name="Paddington" />
        <Fold number={4} name="Hue"/>
    </View>
  )
}

export default Rolodex