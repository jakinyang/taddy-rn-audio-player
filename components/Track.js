import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import TrackPlayer from 'react-native-track-player'

export function Track({ title, index }) {

  async function handlePlayPress() {
    TrackPlayer.skip(index)
    TrackPlayer.play()
  }
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TouchableOpacity
        onPress={handlePlayPress}
      >
        <Text>Play</Text>
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