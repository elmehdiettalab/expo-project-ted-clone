import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
const RadioTabScreen = (props) => {
  const radioDetails = [
    {
      poster: require("../../assets/radio1.png"),
      date: "6 December 2020",
      id: 1,
      title: 'TED en Espanol'
    },
    {
      poster: require("../../assets/radio2.png"),
      date: "1 December 2020",
      id: 2,
      title: 'The Interview'
    },
    {
      poster: require("../../assets/radio3.png"),
      date: "13 November 2020",
      id: 3,
      title: 'Sincerely'
    },
    {
      poster: require("../../assets/radio4.png"),
      date: "6 November 2020",
      id: 4,
      title: 'Ted Talks Daily'
    },
    {
      poster: require("../../assets/radio5.png"),
      date: "16 October 2020",
      id: 5,
      title :'Work Life',
    },
    {
      poster: require("../../assets/radio6.jpg"),
      date: "4 October 2020",
      id: 6,
      title: 'Tedx Shorts'
    },
    {
      poster: require("../../assets/radio7.png"),
      date: "20 September 2020",
      id: 7,
      title: 'Twenty Thousand Hertz'
    },
    {
      poster: require("../../assets/radio8.png"),
      date: "10 September 2020",
      id: 8,
      title :'Ted Business'
    },
  ];

  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: "#000" }}>
      <View style={styles.viewTitleHeader}>
        <Text style={styles.txtTitleHeader}>TED Podcasts</Text>
      </View>
    
      <ScrollView style={{paddingBottom: 100}}>
        <View style={styles.viewChannels}>
          {radioDetails.map((channel) => (
            <TouchableOpacity key={channel.id} onPress={() => props.navigation.navigate('Channel' , {
                channelDetails: channel
            }) }>
              <Image style={styles.imgChannel} source={channel.poster} />
              <Text style={styles.txtDateChannel}>{channel.date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RadioTabScreen;

const styles = StyleSheet.create({
  viewTitleHeader: {
    padding: 30,
  },
  txtTitleHeader: {
    fontWeight: "900",
    fontSize: 26,
  },
  viewChannels: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    justifyContent: 'space-around'
  },
  imgChannel: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  txtDateChannel: {
    marginBottom: 15,
    fontSize: 16,
    color: "#888",
  },
});
