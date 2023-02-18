import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayer from 'react-native-track-player';
import { Track } from './Track';

export function Playlist() {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState();

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
    <View>
      <FlatList
        data={tracks}
        renderItem={({ item, index }) => (
          <Track
            index={index}
            title={item.title}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      />
    </View>
  )
}