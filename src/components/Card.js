import React, { Component, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native'

const { height, width } = Dimensions.get("window");



const Card = (props) => {

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
      return (
        (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol
      );
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

    let video = props.video;
    const navigation = useNavigation()
    return (
      <TouchableOpacity onPress={() => navigation.navigate("VideoPlayer", video)}>
        <View style={styles.container}>
          <Image
            source={{ uri: video.snippet.thumbnails.medium.url }}
            style={styles.cardImage}
          />
          <View style={styles.detailsContainer}>
            <Image
              source={{
                uri: video.snippet.thumbnails.default.url,
              }}
              style={styles.titleImage}
            />
            <View style={styles.infoContainer}>
              <Text
                numberOfLines={2}
                style={{ fontWeight: "bold", fontSize: 16, marginRight: 5 }}
              >
                {video.snippet.title}
              </Text>
              <Text numberOfLines={1} style={{ color: "grey" }}>
                {video.snippet.channelTitle} ·{" "}
                {nFormatter(video.statistics.viewCount, 2)} Views ·{" "}
                {timeSince(new Date(video.snippet.publishedAt)) + " Ago"}
              </Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="more-vert"
                size={23}
                style={{ color: "grey", marginBottom: 30 }}
              ></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    width: width-10,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 5
  },
  cardImage: {
    height: 230,
    borderRadius: 10,
    marginHorizontal: 10
  },
  detailsContainer: {
    height: 70,
    width: width,
    borderBottomWidth: 2,
    borderBottomColor: "#E6E6E6",
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleImage: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginHorizontal: 10,
  },
  infoContainer: {
    flex: 1,
    width: width,
    justifyContent: "center",
  },
});
export default Card;
