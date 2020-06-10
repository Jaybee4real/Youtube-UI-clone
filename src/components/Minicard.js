import React, { Component, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

export class Minicard extends Component {
  render() {
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

    let video = this.props.video;
    return (
      <TouchableOpacity style={{ width: 160 }}>
        <View style={styles.container}>
          <Image
            source={{ uri: video.snippet.thumbnails.medium.url }}
            style={styles.cardImage}
          />
        </View>

        <View style={styles.detailsContainer}>
                <Text style={{ marginHorizontal: 5, textAlign: 'center' }} numberOfLines={2}>{video.snippet.title}</Text>
                <Text style={{ color: 'grey', textAlign: 'center'}}>{video.snippet.channelTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  cardImage: {
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
export default Minicard;
