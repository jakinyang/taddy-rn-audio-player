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
  const [active, setActive] = useState(false)

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
      <Playlist active={active} setActive={setActive} />
      <ControlGroup active={active} setActive={setActive}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#112",
  }
});

export default App;
