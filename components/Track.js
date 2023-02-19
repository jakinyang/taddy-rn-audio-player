import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { State } from 'react-native-track-player'

export function Track({ data, index, selected, setSelected }) {
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
      <Image
        style={styles.image}
        source={{ uri: data.artwork }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{data.title}</Text>
        <Text style={styles.artist}>{data.artist}</Text>

      </View>
      <TouchableOpacity style={styles.button}onPress={handlePlayPress}>
        <Text style={styles.text}>{active && selected === index ? "Pause" : "Play"}</Text>
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
    backgroundColor: 'lightslategray',
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