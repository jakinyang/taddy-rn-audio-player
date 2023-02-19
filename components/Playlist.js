import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayer from 'react-native-track-player';
import { Track } from './Track';

export function Playlist() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function getTracks() {
      const queue = await TrackPlayer.getQueue();
      setTracks(queue)
    };
    getTracks();
  }, []);
  
  if (!tracks) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={({ item, index }) => (<Track index={index} data={item} />)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  }
})