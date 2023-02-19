import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import TrackPlayer from 'react-native-track-player'

export function ControlGroup() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => TrackPlayer.skipToPrevious()}>
        <Text style={styles.button}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => TrackPlayer.play()}>
        <Text style={styles.button}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => TrackPlayer.pause()}>
        <Text style={styles.button}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => TrackPlayer.skipToNext()}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 50,
    marginHorizontal: 20,
  },
  button: {
    fontSize: 20,
    color: 'white'
  }

})