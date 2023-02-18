import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TrackPlayer from 'react-native-track-player'

export function ControlGroup() {
  return (
    <View>
      <TouchableOpacity onPress={() => TrackPlayer.pause()}>
        <Text>Pause</Text>
      </TouchableOpacity>
    </View>
  )
}