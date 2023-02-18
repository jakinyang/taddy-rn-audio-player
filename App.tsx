/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { addTracks, setupPlayer } from './service';
import TrackPlayer from 'react-native-track-player';
import { ControlGroup } from './components/ControlGroup';
import { Playlist } from './components/Playlist'

function App() {
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    async function ready() {
      let trackPlayerReady = await setupPlayer();
      let tracksReady = await addTracks()
      if (trackPlayerReady && tracksReady) {
        setPlayerReady(true)
      }
    }
    ready();
  }, [])

  if (!playerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Playlist />
      <ControlGroup />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
