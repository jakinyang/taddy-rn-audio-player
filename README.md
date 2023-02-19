# Taddy - React Native Audio Player Take Home Assessment

## Intro
This is the repo for Jae Chun Yang's submission for Taddy's Take Home Assessment for the React Native Developer Role

## Video Links
[Pt. 1](https://ooo.mmhmm.app/z_JwSH6KMs00gxBdeUYZVP)
[Pt. 2](https://ooo.mmhmm.app/z_HjfpXsiL0L2ZSddzlXMj)
[Pt. 3](https://ooo.mmhmm.app/z_X6l99bLg2ZcGuE03pYkt)
[Pt. 4](https://ooo.mmhmm.app/z_63aKIUFNsPq2cDDfUBpi)
[Pt. 5](https://ooo.mmhmm.app/z_TpDW01r56nsvNaakOPM0)
[Pt. 6](https://ooo.mmhmm.app/z_cLYlpM2XJ3DZXSGQDA57)
[Pt. 7](https://ooo.mmhmm.app/z_qBsPeDdzKBnAMqgPyVIX)

## Answers to Questions
1. If you have more time to do UI / UX improvements, what improvements would you make?
- This would depend on whether or not more features would also be implemented.
- Without any more features, I think that I would like to fine tune the Playlist element by wrapping it in a parent View that would have a background color and rounded corners for a softer look, as well as off-setting it from the sides to give it more "breathing room on the screen"
- With more features, I think it would be good to have an episode screen that could have modal presentation and would display the artwork, info, as well as a progress slider to indicate how much of the podcast has been listened to.
- Beyond, that, in the control group, having a progress slider to 1: indicate the progress of the podcast as well as 2: having seeking capabilities by sliding the slider to the point in the podcast you want to listen to would be a natural feature to add with UI/UX imporovements in the mix.
- With that, I would also add a display for the duration of the episode as well as how much time has elapsed to indicate progress with time indication as well.
- The control group also currently uses Text for the touchable opacities - I think that this would look better if they were SVG Icons and buttons which are semantically more common and better understood across languages than using english words like "play", "pause" or "next"
- Having both a dark and a light mode with high contrast would also be a priority in the UI/UX department, especially for people who may have visual conditions where darkmode or lightmode is a hinderance.

2. Do you see any pros / cons working with react-native-track-player?
- A slight "con" of working with RNTP is that it is a comprehensive library, so there was a slight initial learning curve, but still the initial setup was simple enough.
- A pro is that a lot of the utilities and functionality of dealing with audio playback and track management seems to be handled internally by the RNTP library - for example, getting the current state of the player as well as which track is playing as well as adding and removing tracks are all handled by easy to understand asynchronous method calls on the TrackPlayer object.
- Another pro is that it seems to have good integratino with native features on both iOS/Swift and Android/Kotlin and the respective native libraries it interops with. 
- Without exploring and building with the library further, it's hard to say what the limitations of the library are, but I would be concerned about the limitations of integrating more niche native features like carplay or some other new feature on iOS or Android that the library has not implemented yet.
- This introduces another potential concern that if your entire app is built on this library, if the library is maintained and works well, then that's great, but if something breaks or if they stop maintaining it, you would either have to the library yourself, or rebuild your app with another library. Basically, it seems like I would be very dependent on this library for the core functionality of my app.

3. How would you go about implementing offline listening for the episodes?
- My first approach would be to go with what the documentation guide suggests which is to use the "Hybrid Offline/Network" option using react-native-fs/rn-fetch-blob.
- It seems like the react-native-fs library has methods to do standard CRUD operations on the filesystem within both iOS and Android.
- In the app, each track could have a download button, which would use the "mp3" url of each track and use fetch or some other fetch-like function to make a request to the url and then take the response and use rnfs methods to create a file using either writeFile(), or write() and using DownloadDirectoryPath or LibraryDirectoryPath and writing the information fetched about the mp3 file to this.
- I don't understand enough about mp3 yet to know if this will require a special encoding configuration or a specification of an extension when downloading.
- After downloading, we could use methods like readFile() to read the downloaded MP3 and then add it to the queue in react native track player.
- This will likely also require a step before downloading to request permissions before writing.
- With a library like rn-fetch-blob, it seems that you can either just use the fetch method to download files from urls, setup a config to download to a specific file or in a specific conversiona/format with the .config method.
- To read, we could also use the readFile method and then add it to the TrackPlayer.
- Given what I've seen in these two libraries and the example code I've seen online, I would likely lean towards using rn-fetch-blob as it seems much more straight forward.

- Without actually trying to implement it and figuring out the details with trial and error and learning, I think the implementation would go something like this: 
```js
import RNFetchBlob from "rn-fetch-blob";

let filePath;

RNFetchBlob.config({
  fileCache: true,
})
  .fetch("GET", "https://traffic.megaphone.fm/GLT5025099642.mp3?updated=1511216722", { ... headers })
  .then((res) => { 
    console.log("The file saved to ", res.path());
    filePath = res.path();
   });

...

RNFetchBlob.fs.readFile(filePath, 'base64')
.then((data) => {
  TrackPlayer.add({
    ...data
  })
})

```

## Outline of Plan of Approach 
1. Install RNTP
    1. Init Project
    2. cocoapod for iOS
2. Setup Track Player
    1. .registerPlaybackService(() ⇒ playbackService);
    2. Make playbackService
    3. .setupPlayer
    4. .add([tracks])
3. Test Track Player
    1. Make a button on Homescreen to test playback
4. Structure Project
    1. Folder structure
    2. Just a simple components folder
5. Add all three tracks
6. Control Group feature/control-group
    1. Make control group component
        1. Implement Play/Pause
        2. Implement track skipping
7. Playlist feature/playlist
    1. Make a track component
        1. Implement play/pause function
            1. Play the track that is selected
                1. Play the track that you pressed the play button on
                2. TrackPlayer.skip(index)
    2. Make Playlist component
        1. Flatlist
            1. Data = tracks data
                1. How do I get the tracks data
            2. renderItem ⇒ <Track />
                1. What data do we need to pass here so that it can target and then play a given track
8. Styling pass feature/styling 
9. Debug for Button state


