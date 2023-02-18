import TrackPlayer from "react-native-track-player";

export async function setupPlayer() {
  await TrackPlayer.setupPlayer();
  return true;
}

export async function addTracks() {
  await TrackPlayer.add([
    {
      id: '1',
      url: "https://traffic.megaphone.fm/GLT5025099642.mp3?updated=1511216722",
      title: "Case #2 Britney",
      artist: "Mystery Show",
      artwork: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/94/aa/a1/94aaa142-279f-aec6-2634-436c4b28cfac/mza_8970625345940320927.png/600x600bb.png",
      duration: 2769,
    },
    {
      id: "2",
      title: "Mr. Hollowell Didn't like that",
      artist: "Revisionist History",
      url: "https://dts.podtrac.com/redirect.mp3/chrt.fm/track/8DB4DB/pdst.fm/e/nyt.simplecastaudio.com/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/episodes/fe4f894f-8ab5-4fcd-b685-328ab469dd67/audio/128/default.mp3?aid=rss_feed&awCollectionId=03d8b493-87fc-4bd1-931f-8a8e9b945d8a&awEpisodeId=fe4f894f-8ab5-4fcd-b685-328ab469dd67&feed=54nAGcIl",
      artwork: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/10/b4/f9/10b4f94c-c484-7dcd-8c40-10b142b42ab9/mza_6334207016816396690.jpg/600x600bb.png"
    },
    {
      id: 3,
      title: "Fargo",
      artist: "Snap Judgement",
      url: "https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/snapjudgment/snapjudgment180315_snapclassic_fargo.mp3",
      artwork: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts118/v4/ed/4c/d0/ed4cd05c-357a-ef54-b97c-89e9257ec967/mza_1200562078040939068.png/600x600bb.png"
    }
  ])
  return true;
}

export async function playbackService() {
  // It does nothing for now
  // Later will register external event handlers
}