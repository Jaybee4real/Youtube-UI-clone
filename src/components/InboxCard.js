import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
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

const InboxCard = (props) => {
  let video = props.video;
  let channel = props.channel
  console.log(video.snippet.thumbnails.medium.url);
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
