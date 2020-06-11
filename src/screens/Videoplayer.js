import React from "react";
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

const { height, width } = Dimensions.get("window");

const Videoplayer = (props) => {
  //////////Number Formatter Function///////

  function nFormatter(num, digits) {
    const si = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }
  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 400,
          width: "100%",
          borderBottomWidth: 3,
          borderRadius: 20,
        }}
      >
        <WebView
          source={{
            uri: `https://www.youtube.com/embed/${props.route.params.contentDetails.id}`,
          }}
          startInLoadingState={true}
          allowsFullscreenVideo={true}
          javaScriptEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
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
          <Icon name="thumb-up" size={30} style={{marginBottom: 7, color: 'grey'}} />
          <Text>{nFormatter(props.route.params.statistics.likeCount)}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="thumb-down" size={30} style={{marginBottom: 7, color: 'grey'}} />
          <Text>{nFormatter(props.route.params.statistics.dislikeCount)}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="reply" size={32} style={{ marginBottom: 7, color: 'grey', transform: [{ rotateY: '180deg' }]}} />
          <Text>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="get-app" size={32} style={{marginBottom: 7, color: 'grey', marginLeft: 10,}} />
          <Text style={{textAlign: 'center'}}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="library-add" size={30} style={{marginBottom: 7, color: 'grey'}} />
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: 24,
      },
    }),
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
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

/////TO Do Redo Video data, run two functions on videoplayer screen one for video id using search lis, second for video stats using channel id of video to search video list url//////
