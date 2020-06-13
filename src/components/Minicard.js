import React, { Component, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
const Minicard = (props) => {
  
  const navigation = useNavigation()
    let video = props.video;
    return (
      <TouchableOpacity
        style={{ width: 160 }}
        onPress={() => navigation.navigate("VideoPlayer", video)}
      >
        <View style={styles.container}>
          <Image
            source={{ uri: video.snippet.thumbnails.medium.url }}
            style={styles.cardImage}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text
            style={{ marginHorizontal: 5, textAlign: "center" }}
            numberOfLines={2}
          >
            {video.snippet.title}
          </Text>
          <Text style={{ color: "grey", textAlign: "center" }}>
            {video.snippet.channelTitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
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
