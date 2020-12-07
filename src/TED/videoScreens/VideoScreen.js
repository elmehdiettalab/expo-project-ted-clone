import React, { useState } from "react";
import { ScrollView,View, Text, StyleSheet, TouchableOpacity , Image} from "react-native";
import { Video } from "expo-av";
import { Entypo, Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import {connect} from 'react-redux'; 
import { incViews } from "../../state-management/action";

const VideoScreen = (props) => {
  const { videoUrl, title } = props.route.params;
  const [isTrue, setIsTrue] = useState(true);

  const recomTabHandler = () => {
    setIsTrue(!isTrue);
  };
  const detailTabHandler = () => {
    setIsTrue(!isTrue);
  };
  return (
    <ScrollView style={{ flex: 1, paddingTop: 40, backgroundColor: "#000" }}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          style={styles.topacHeader}
          onPress={() => props.navigation.goBack()}
        >
          <Entypo name="chevron-left" size={36} color="white" />
          <Text style={styles.txtHome}>Home</Text>
        </TouchableOpacity>
      </View>
      <Video
        source={{ uri: videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        useNativeControls={true}
        // usePoster={true}
        // posterSource={require('../../../assets/levi.jpg')}
        // shouldPlay
        onLoadStart = {() => incViews(props.stateManager)}
        style={styles.videoRecommendation}
      />

      <View style={styles.viewUnderVideo}>
        <Text style={styles.txtLatestRecom}>Your latest recommendation</Text>
        <Text style={styles.txtTitleVideo}>{title}</Text>

        <View style={styles.viewAuthorViews}>
          <Text style={styles.txtAuthorViews}>
            Elmehdi Ettalab | {props.stateManager.views} views
          </Text>
        </View>
        {/*  */}
        <View style={styles.viewActionIconBar}>
          <TouchableOpacity style={styles.topacLikeBtn}>
            {/* <Ionicons name="md-heart" size={34} color="white" /> */}
            <Ionicons name="md-heart-empty" size={34} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.topacPlaylistBtn}>
            <MaterialIcons name="playlist-add" size={34} color="grey" />
            {/* <MaterialIcons name="playlist-add-check" size={34} color="white" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.topacDownloadBtn}>
            <Feather name="download" size={34} color="grey" />
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.viewTabSwitcher}>
          <TouchableOpacity
            style={isTrue ? styles.topacRecomTab : styles.topacRecomTabFocused}
            onPress={recomTabHandler}
          >
            <Text
              style={isTrue ? styles.txtRecomTab : styles.txtRecomTabFocused}
            >
              Recommendations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              isTrue ? styles.topacdetailTabFocused : styles.topacdetailTab
            }
            onPress={detailTabHandler}
          >
            <Text
              style={isTrue ? styles.txtDetailTabFocused : styles.txtDetailTab}
            >
              Details
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewBodySwitch}>
          {!isTrue ? (
            <Text style={styles.txtRecommBodyTab}>
              The computer wouldn't start. She banged on the side and tried
              again. Nothing. She lifted it up and dropped it to the table.
              Still nothing. She banged her closed fist against the top. It was
              at this moment she saw the irony of trying to fix the machine with
              violence.
            </Text>
          ) : (
            <Text style={styles.txtRecommBodyTab}>
              He had done everything right. There had been no mistakes
              throughout the entire process. It had been perfection and he knew
              it without a doubt, but the results still stared back at him with
              the fact that he had lost.
            </Text>
          )}
        </View>

        {isTrue? <View style={styles.viewAuthorAvatar}>
              <Image style={styles.imgAvatarAuthor} source={require('../../../assets/avatar.jpg')}/>
              <View style={styles.viewNameJob}>
                <Text style={styles.txtName}>Elmehdi Ettalab</Text>
                <Text style={styles.txtJob}>Programmer, Developer, No Idea</Text>
              </View>
        </View> : null}
        {/* <TouchableOpacity >
            <Text>Add Views</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  videoRecommendation: {
    width: 1920 / 4.6,
    height: 1080 / 4.6,
  },
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
  viewUnderVideo: {
    padding: 20,
  },
  txtLatestRecom: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 14,
    color: "#888",
    opacity: 0.5,
  },
  txtTitleVideo: {
    marginTop: 10,
    fontWeight: "900",
  },
  viewAuthorViews: {
    marginTop: 10,
  },
  txtAuthorViews: {
    color: "#888",
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  viewActionIconBar: {
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 20,
  },
  topacLikeBtn: {
    marginRight: 20,
  },
  topacDownloadBtn: {
    marginRight: 20,
  },
  topacPlaylistBtn: {
    marginRight: 20,
  },
  viewTabSwitcher: {
    flexDirection: "row",
  },
  topacRecomTab: {
    marginRight: 20,
  },
  topacRecomTabFocused: {
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#e62B1e",
  },
  txtRecomTab: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "400",
    color: "#888",
  },
  txtRecomTabFocused: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "400",
    color: "#FFF",
  },
  topacdetailTabFocused: {
    borderBottomWidth: 2,
    borderBottomColor: "#e62B1e",
  },
  txtDetailTab: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "400",
    color: "#888",
  },
  txtDetailTabFocused: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "400",
    color: "#FFF",
  },
  viewBodySwitch: {
    marginTop: 20,
  },
  txtRecommBodyTab: {
    fontWeight: "700",
    fontSize: 16,
    color: "#CCC",
  },
  viewAuthorAvatar: {
    flexDirection: 'row', 
    marginTop: 20
  }, 
  imgAvatarAuthor: {
    width: 70,
    height:70, 
    borderRadius: 90/2, 
    opacity: .5, 
    marginRight: 20
  }, 
  viewNameJob: {
    justifyContent: 'space-around', 
    paddingTop: 10, 
    paddingBottom: 10
  }, 
  txtName: {
    fontWeight: '900', 
    color: '#888'
  }, 
  txtJob: {
    fontWeight: '300', 
    color: '#555', 
    fontSize: 16
  }
});


const mapStateToProps = (state ) => {
  return state ; 
}

const mapDispatchToProps = (dispatch) => ({
  incViews : (state) => dispatch(incViews(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoScreen);
