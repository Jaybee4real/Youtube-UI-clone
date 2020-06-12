import React, { Component, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native'

const { height, width } = Dimensions.get("window");
import functions from '../components/functions'


const {timeSince, nFormatter} = functions





const Card = (props) => {

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
                style={{ color: "grey", marginBottom: 20, marginRight: 15 }}
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
