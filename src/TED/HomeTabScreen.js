import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";

const HomeTabScreen = (props) => {
  const [img, setImg] = useState(null);
  const [imageName, setImageName] = useState("");
  const [uploadUri, setUploadUri] = useState(null);
  const [arrayVideo, setArrayVideo] = useState([]);
  let i = 0;

  useEffect(() => {
    bringAll();
    // return () => {
    //   cleanup
    // }
  }, []);

  const bringAll = () => {
    var storageRef = firebase.storage().ref("/");

    // Now we get the references of these images
    storageRef
      .listAll()
      .then(function (result) {
        result.items.forEach(function (VideoRef) {
          // And finally display them
          displayVideo(VideoRef);
          console.log(VideoRef + "\n");
        });
      })
      .catch(function (error) {
        // Handle any errors
        console.log(error);
      });
  };
  function displayVideo(videoRef) {
    videoRef
      .getDownloadURL()
      .then(function (url) {
        // TODO: Display the image on the UI
        // setDownloadUrl(url);
        setArrayVideo((old) => [...old, url]);
      })
      .catch(function (error) {
        // Handle any errors
      });
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingTop: 40,
        position: "relative",
      }}
    >
      <View style={styles.viewLogo}>
        <Image
          style={styles.imgLogo}
          source={require("../../assets/ted1.png")}
        />
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.txtRecommendation}>Your latest recommendation</Text>
      </View>

      {/* ******************** VIDEO ************************ */}
      {/* ******************** VIDEO ************************ */}
      {/* ******************** VIDEO ************************ */}

      <View style={styles.viewRecommendation}>
        <TouchableOpacity onPress={() => bringAll()}>
          <Video
            source={require("../../assets/Pub.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode="cover"
            // shouldPlay
            // isLooping
            style={styles.videoRecommendation}
          />

          <View style={styles.viewDurationVideo}>
            <Text style={styles.txtDurationVideo}>10.59</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.txtTitleRecom}>
          What makes your life better? Does it have to be perfect?
        </Text>
      </View>
      {/* ************* MORE RECOMMENDATIONS ********************* */}
      <View style={styles.viewMoreRecommendations}>
        <Text style={styles.txtMoreRecom}>More recommendations</Text>
        <ScrollView style={styles.scrollMoreRecom} horizontal={true}>
          <TouchableOpacity style={styles.topacViewVideo}>
            <Video
              source={require("../../assets/4.mp4")}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              // shouldPlay
              // isLooping
              style={styles.videoMoreRecom}
            />

            <View style={styles.viewDurationVideo}>
              <Text style={styles.txtDurationVideo}>10.59</Text>
            </View>
            <Text>The happy secret to a happy life</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topacViewVideo}>
            <Video
              source={require("../../assets/5.mp4")}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              // shouldPlay
              // isLooping
              style={styles.videoMoreRecom}
            />

            <View style={styles.viewDurationVideo}>
              <Text style={styles.txtDurationVideo}>10.59</Text>
            </View>
            <Text>Your body language says a lot about u</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topacViewVideo}>
            <Video
              source={require("../../assets/6.mp4")}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              // shouldPlay
              // isLooping
              style={styles.videoMoreRecom}
            />

            <View style={styles.viewDurationVideo}>
              <Text style={styles.txtDurationVideo}>10.59</Text>
            </View>
            <Text>Never thought I would become this famous</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* ************* NEWEST TALKS ***************************** */}
      <View style={styles.viewMoreRecommendations}>
        <Text style={styles.txtMoreRecom}>Newest talks</Text>
        <ScrollView style={styles.scrollMoreRecom} horizontal={true}>
          <TouchableOpacity style={styles.topacViewVideo}>
            <Video
              source={require("../../assets/1.mp4")}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              // shouldPlay
              // isLooping
              style={styles.videoMoreRecom}
            />

            <View style={styles.viewDurationVideo}>
              <Text style={styles.txtDurationVideo}>10.59</Text>
            </View>
            <Text>The happy secret to a happy life</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topacViewVideo}>
            <Video
              source={require("../../assets/2.mp4")}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              // shouldPlay
              // isLooping
              style={styles.videoMoreRecom}
            />

            <View style={styles.viewDurationVideo}>
              <Text style={styles.txtDurationVideo}>10.59</Text>
            </View>
            <Text>Your body language says a lot about u</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topacViewVideo}>
            <Video
              source={require("../../assets/Pub.mp4")}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              // shouldPlay
              // isLooping
              style={styles.videoMoreRecom}
            />

            <View style={styles.viewDurationVideo}>
              <Text style={styles.txtDurationVideo}>10.59</Text>
            </View>
            <Text>Never thought I would become this famous</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* ************* TEST ARRAY VIDEO ***************************** */}
      <View style={styles.viewMoreRecommendations}>
        <Text style={styles.txtMoreRecom}>Test Array Video</Text>
        <ScrollView style={styles.scrollMoreRecom} horizontal={true}>
          {arrayVideo.map((url) => {
            return (
              <TouchableOpacity
                style={styles.topacViewVideo}
                onPress={() =>
                  props.navigation.navigate("Video", {
                    videoUrl: url,
                    title: 'The happy secret to a happy life'
                  })
                }
              >
                <Video
                  source={{ uri: url }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  resizeMode="cover"
                  // shouldPlay
                  // isLooping
                  style={styles.videoMoreRecom}
                />

                <View style={styles.viewDurationVideo}>
                  <Text style={styles.txtDurationVideo}>10.59</Text>
                </View>
                <Text>The happy secret to a happy life</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* 
      <TouchableOpacity
        onPress={() => pickImage()}
        style={{
          marginBottom: 20,
          width: 150,
          height: 47,
          backgroundColor: "#4e41a3",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Choose photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => uploadToStorage(uploadUri)}
        style={{
          width: 150,
          height: 47,
          backgroundColor: "#4e41a3",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => display()}
        style={{
          marginTop: 20,
          width: 150,
          height: 47,
          backgroundColor: "#4e41a3",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Display</Text>
      </TouchableOpacity>
      <Image style={{ width: 200, height: 200 }} source={{ uri: displayImg }} /> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  viewLogo: {
    width: 100,
    padding: 30,
  },
  imgLogo: {
    width: 320 / 3.5,
    height: 118 / 3.5,
  },
  viewContainer: {
    // padding: 30,
    paddingTop: 10,
  },
  txtRecommendation: {
    fontWeight: "900",
    fontSize: 22,
    paddingLeft: 20,
    color: "#eeeeee",
  },
  videoRecommendation: {
    width: 1920 / 4.7,
    height: 1080 / 4.7,
    borderRadius: 5,
    position: "relative",
    opacity: 0.7,
  },
  viewRecommendation: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  viewDurationVideo: {
    position: "absolute",
    backgroundColor: "#e62B1e",
    borderRadius: 5,
    padding: 2,
    bottom: 10,
    right: 10,
  },
  txtDurationVideo: {
    fontWeight: "400",
  },
  txtTitleRecom: {
    color: "#eeeeee",
    fontWeight: "900",
    fontSize: 18,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 10,
    lineHeight: 23,
  },
  viewMoreRecommendations: {
    paddingTop: 40,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  txtMoreRecom: {
    color: "#eee",
    fontWeight: "900",
    fontSize: 22,
    paddingLeft: 20,
  },
  videoMoreRecom: {
    width: 1920 / 6.7,
    height: 1080 / 6.7,
    borderRadius: 5,
    position: "relative",
    opacity: 0.7,
  },
  topacViewVideo: {
    width: 1920 / 6.7,
    height: 1080 / 6.7,
    marginRight: 10,
  },
  scrollMoreRecom: {
    padding: 20,
  },
});

export default HomeTabScreen;
