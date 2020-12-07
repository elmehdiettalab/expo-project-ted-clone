import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Entypo, Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { Audio } from "expo-av";
const ChannelScreen = (props) => {
  const { channelDetails } = props.route.params;
  const [isPlaying, setPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const play = async () => {
    // try {
    //   const {sound: soundObject,status,} = await Audio.Sound.createAsync(require("../../../assets/zik.mp3"), {
    //     shouldPlay: true,
    //   });

    //   console.log(sound)
    //   // Your sound is playing!
    // } catch (error) {
    //   console.log("ERROR => " + error);
    // }
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync('https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3');
      await soundObject.playAsync();
      // Your sound is playing!

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      await soundObject.unloadAsync();
    } catch (error) {
      // An error occurred!
    }
  };

  const pause = async () => {
    if (sound != null) await sound.pauseAsync();
  };
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: "#000" }}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          style={styles.topacHeader}
          onPress={() => props.navigation.goBack()}
        >
          <Entypo name="chevron-left" size={36} color="white" />
          <Text style={styles.txtHome}>TED Podcasts</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.viewContainer}>
        <View style={styles.viewPoster}>
          <Image style={styles.imgChannel} source={channelDetails.poster} />
          <Text style={styles.txtTitleChannel}>{channelDetails.title}</Text>
        </View>

        <View style={styles.viewDesc}>
          <Text style={styles.txtDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            distinctio minus unde iste molestias commodi ex, aperiam nam ea
            corporis ipsa eveniet ad pariatur quibusdam culpa, rerum sequi atque
            dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maxime ab libero culpa dolores odit odio, vero quas iste quis?
            Aliquid impedit possimus aliquam, provident dolores harum eaque iure
            nostrum fugiat!
          </Text>
        </View>

        <View style={styles.viewAudioList}>
          <TouchableOpacity>
            <Entypo name="controller-jump-to-start" size={64} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="controller-play"
              size={64}
              color="white"
              onPress={play}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="controller-next"
              size={64}
              color="white"
              onPress={pause}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChannelScreen;

const styles = StyleSheet.create({
  viewHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  topacHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtHome: {
    fontWeight: "900",
    marginLeft: 10,
  },
  viewContainer: {
    padding: 30,
  },
  viewPoster: {
    flexDirection: "row",
  },
  imgChannel: {
    width: 160,
    height: 160,
    marginRight: 30,
  },
  txtTitleChannel: {
    alignSelf: "flex-end",
    fontSize: 22,
    fontWeight: "900",
  },
  viewDesc: {
    marginTop: 40,
  },
  txtDesc: {
    color: "#ccc",
    fontSize: 16,
  },
  viewAudioList: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
});
