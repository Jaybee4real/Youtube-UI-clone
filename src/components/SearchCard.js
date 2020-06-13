import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import functions from '../components/functions'


const { width, height } = Dimensions.get("window");
const {timeSince, nFormatter} = functions


const SearchCard = (props) => {
  let video = props.video;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: video.snippet.thumbnails.default.url,
        }}
        style={styles.titleImage}
      />
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={2} style={{ color: "grey" }}>
          {video.snippet.description}
        </Text>
        <Text numberOfLines={2} style={{ color: "grey", flexWrap: "wrap" }}>
          {nFormatter(video.statistics.viewCount, 2)} Views ·{" "}
          {timeSince(new Date(video.snippet.publishedAt)) + " Ago"}
        </Text>
      </View>
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
});

export default SearchCard;
