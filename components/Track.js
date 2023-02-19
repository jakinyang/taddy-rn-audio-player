import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { Event, State, useTrackPlayerEvents } from 'react-native-track-player'

export function Track({ data, index }) {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [playing, setPlaying] = useState(false)

  async function handlePlayPress() {
    if (currentTrack === index) {
      if (playing) {
        TrackPlayer.pause();
        return
      }
      TrackPlayer.play();
      return
    }
    TrackPlayer.skip(index)
    setCurrentTrack(index)
    TrackPlayer.play()
  }

  useTrackPlayerEvents([Event.PlaybackTrackChanged, Event.PlaybackState], async (event) => {
    if (event.type === Event.PlaybackTrackChanged) {
      let currentIndex = await TrackPlayer.getCurrentTrack();
      setCurrentTrack(currentIndex);
    }
    if (event.type === Event.PlaybackState) {
      let status = await TrackPlayer.getState();
      if (status === State.Playing) {
        setPlaying(true);
      }
      if (status === State.Paused) {
        setPlaying(false);
      }
    }
  })
  return (
    <View
      style={{
        ...styles.container,
        ...{ backgroundColor: currentTrack === index ? 'lightslategray' : 0x031A26 }
      }}>
      <Image
        style={styles.image}
        source={{ uri: data.artwork }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{data.title}</Text>
        <Text style={styles.artist}>{data.artist}</Text>

      </View>
      <TouchableOpacity style={styles.button} onPress={handlePlayPress}>
        <Text style={styles.text}>{playing && currentTrack === index ? "Pause" : "Play"}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    alignSelf: 'flex-end'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
  artist: {
    fontSize: 15,
    color: 'white'
  },
  image: {
    height: 70,
    width: 70
  },
  button: {
    marginRight: 5
  }
})