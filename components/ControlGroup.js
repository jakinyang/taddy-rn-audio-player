import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TrackPlayer from 'react-native-track-player'

export function ControlGroup() {
  return (
    <View>
      <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
        <Text>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.play()}>
        <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.pause()}>
        <Text>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}