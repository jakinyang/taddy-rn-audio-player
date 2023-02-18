import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { State } from 'react-native-track-player'

export function Track({ title, index, selected, setSelected }) {
  const [active, setActive] = useState(false)

  async function handlePlayPress() {
    let status = await TrackPlayer.getState();
    if (selected === index) {
      if (status === State.Playing) {
        TrackPlayer.pause();
        setActive(false)
        return
      }
      TrackPlayer.play();
      setActive(true)
      return
    }
    TrackPlayer.skip(index)
    setActive(true)
    setSelected(index)
    TrackPlayer.play()
  }
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={handlePlayPress}>
        <Text>{active && selected === index ? "Pause" : "Play"}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})