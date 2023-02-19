import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import TrackPlayer, { State } from 'react-native-track-player'

export function ControlGroup({ active, setActive }) {

  async function handlePlayPress() {
    let status = await TrackPlayer.getState();
    if (status === State.Playing) {
      TrackPlayer.pause();
      setActive(false)
      return
    }
    TrackPlayer.play();
    setActive(true)
    return
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => TrackPlayer.skipToPrevious()}>
        <Text style={styles.button}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePlayPress}>
        <Text style={styles.button}>{active ? "Pause" : "Play"}</Text>
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