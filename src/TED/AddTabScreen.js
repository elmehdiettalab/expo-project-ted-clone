import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MediaMeta from 'react-native-media-meta';
import { Video } from "expo-av";
import * as firebase from "firebase";
import { MaterialIcons } from "@expo/vector-icons";

const AddTabScreen = () => {
  const [Uri, setUri] = useState(null);
  const [UploadUri, setUploadUri] = useState(null);
  const [videoName, setVideoName] = useState("");
  const path = '../../assets/Pub.mp4'; 
  
  const pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then((result) => {
      if (!result.cancelled) {
        // setImageName("Video" + i++);
        setUploadUri(
          Platform.OS === "ios" ? result.uri.replace("file://", "") : result.uri
        );
        setUri(result.uri);

        MediaMeta.get(path)
        .then(metadata => console.log(metadata.duration))
        .catch(e => console.log('Error => ' + e)); 
      }
    });
  };
  const uploadToStorage = (imageURL) => {
    getFileBlob(imageURL, (blob) => {
      let r = Math.random().toString(36).substring(7);
      const fileName = videoName+ ".mov";
      firebase
        .storage()
        .ref(fileName)
        .put(blob)
        .then((snapshot) => {
          //You can check the image is now uploaded in the storage bucket
          console.log(`${videoName} has been successfully uploaded.`);
        })
        .catch((e) => console.log("uploading image error => ", e));
    });
  };
  const getFileBlob = function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener("load", function () {
      cb(xhr.response);
    });
    xhr.send();
  };
  return (
    <View style={styles.viewScreen}>
      <View style={styles.viewAddVideo}>
        <TextInput
          value={videoName}
          onChangeText={setVideoName}
          style={styles.inputName}
          placeholder="Title ... "
        />
        <TouchableOpacity style={styles.topacAdd} onPress={pickImage}>
          {/* <Text style={styles.txtAdd}>Add</Text> */}
          <MaterialIcons name="add-circle" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <Video
        source={{ uri: Uri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.videoRecommendation}
      />
      <TouchableOpacity
        style={styles.topacUpload}
        onPress={() => uploadToStorage(UploadUri)}
      >
        <Text style={styles.txtAdd}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTabScreen;

const styles = StyleSheet.create({
  viewScreen: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  topacAdd: {
    width: 40,
    height: 40,
    backgroundColor: "#e62B1e",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 40,
  },
  txtAdd: {
    fontWeight: "900",
  },
  videoRecommendation: {
    width: 1920 / 7,
    height: 1080 / 7,
    borderRadius: 5,
    position: "relative",
    // opacity: 0.7,
  },
  topacUpload: {
    width: 140,
    height: 47,
    backgroundColor: "#4e41a3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  viewAddVideo: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginBottom: 40,
  },
  inputName: {
    width: 150,
    height: 47,
    backgroundColor: "#1C1C1C",
    padding: 10,
    color: "white",
    marginRight: 20,
    borderRadius: 5,
  },
});
