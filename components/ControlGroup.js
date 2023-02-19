import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { State, useTrackPlayerEvents, Event } from 'react-native-track-player'

export function ControlGroup() {
  const [playing, setPlaying] = useState(false);
  async function handlePlayPress() {
    let status = await TrackPlayer.getState();
    if (status === State.Playing) {
      TrackPlayer.pause();
      return
    }
    TrackPlayer.play();
    return
  }

  useTrackPlayerEvents([Event.PlaybackState], async () => {
    let status = await TrackPlayer.getState();
    if (status === State.Playing) {
      setPlaying(true);
    }
    if (status === State.Paused) {
      setPlaying(false);
    }
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => TrackPlayer.skipToPrevious()}>
        <Text style={styles.button}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePlayPress}>
        <Text style={styles.button}>{playing ? "Pause" : "Play"}</Text>
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