import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchCard from "../components/SearchCard";
import functions from '../components/functions'


const {timeSince, nFormatter} = functions


const { height, width } = Dimensions.get("window");

const Videoplayer = (props) => {

  const navigation = useNavigation();
  const [relatedData, setRelatedData] = useState();

  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${props.route.params.statistics.channelId}&maxResults=25&key=[YOUR_API_KEY]`
    ).then((data) => {
      setRelatedData(data.items);
      console.log(relatedData);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", margin: 10, zIndex: 8, marginTop: 20 }}
      >
        <Icon name="keyboard-backspace" size={32} color={"white"} />
      </TouchableOpacity>
      <View
        style={{
          height: 320,
          width: "100%",
          borderBottomWidth: 3,
          borderRadius: 20,
        }}
      >
        <WebView
          source={{
            uri: `https://www.youtube.com/embed/${props.route.params.id}`,
          }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          mediaPlaybackRequiresUserAction={false}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <Text
            numberOfLines={2}
            style={{ fontWeight: "bold", fontSize: 16, marginRight: 5 }}
          >
            {props.route.params.snippet.title}
          </Text>
          <Text numberOfLines={1} style={{ color: "grey" }}>
            {props.route.params.snippet.channelTitle} ·{" "}
            {nFormatter(props.route.params.statistics.viewCount, 2)} Views ·{" "}
            {timeSince(new Date(props.route.params.snippet.publishedAt)) +
              " Ago"}
          </Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="arrow-drop-down"
            size={23}
            style={{ color: "grey", marginBottom: 30, marginRight: 10 }}
          ></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Icon
            name="thumb-up"
            size={30}
            style={{ marginBottom: 7, color: "grey" }}
          />
          <Text>{nFormatter(props.route.params.statistics.likeCount)}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="thumb-down"
            size={30}
            style={{ marginBottom: 7, color: "grey" }}
          />
          <Text>{nFormatter(props.route.params.statistics.dislikeCount)}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="reply"
            size={32}
            style={{
              marginBottom: 7,
              color: "grey",
              transform: [{ rotateY: "180deg" }],
            }}
          />
          <Text>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="get-app"
            size={32}
            style={{ marginBottom: 7, color: "grey", marginLeft: 10 }}
          />
          <Text style={{ textAlign: "center" }}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="library-add"
            size={30}
            style={{ marginBottom: 7, color: "grey" }}
          />
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      <SearchCard data={relatedData[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 35,
      },
      android: {
        marginTop: 24,
      },
    }),
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  detailsContainer: {
    height: 70,
    width: width,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  infoContainer: {
    flex: 1,
    width: width,
    justifyContent: "center",
    paddingLeft: 10,
  },
});
export default Videoplayer;

/////TO Do Redo Video data, run two functions on videoplayer screen one for video id using search list, second for video stats using channel id of video to search video list url//////
