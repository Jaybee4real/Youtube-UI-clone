import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
import functions from '../components/functions'
const {timeSince, nFormatter} = functions


const InboxCard = (props) => {
  let video = props.video;
  let channel = props.channel
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: channel.snippet.thumbnails.default.url,
        }}
        style={styles.channelImage}
      />
      <View style={styles.descriptionContainer}>
        <Text style={{ fontSize: 16 }}>
          {channel.snippet.title} Uploaded A New Video
        </Text>
        <Text numberOfLines={2} style={{ color: "grey" }}>
          {video.snippet.description}
        </Text>
        <Text numberOfLines={2} style={{ color: "grey", flexWrap: "wrap" }}>
          {nFormatter(video.statistics.viewCount, 2)} Views ·{" "}
          {timeSince(new Date(video.snippet.publishedAt)) + " Ago"}
        </Text>
      </View>

      <Image
        source={{
          uri: video.snippet.thumbnails.default.url,
        }}
        style={styles.titleImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    width: width,
    height: 120,
  },
  titleImage: {
    width: width / 3 - 30,
    height: 80,
    marginHorizontal: 10,
    marginTop: 7,
  },
  descriptionContainer: {
    width: width / 2,
  },
  channelImage: {
    height: 55,
    width: 55,
    borderRadius: 25,
    marginTop: 20,
    marginHorizontal: 10
  }
});

export default InboxCard;
