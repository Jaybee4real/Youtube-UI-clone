import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import functions from "../components/functions";
import Icon from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from '@react-navigation/native'


const { timeSince  } = functions;

const { width, height } = Dimensions.get("window");

const SearchCard = (props) => {
  let video = props.video;
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate("VideoPlayer", video)}>
      <View style={styles.container}>
        <Image
          source={{ uri: video.snippet.thumbnails.medium.url }}
          style={styles.titleImage}
        />
        <View style={styles.descriptionContainer}>
          <Text numberOfLines={2} style={{ fontSize: 16 }}>
            {video.snippet.title}
          </Text>
          <Text numberOfLines={2} style={{ color: "grey" }}>
            {video.snippet.channelTitle} ·{" "}
            {timeSince(new Date(video.snippet.publishedAt)) + " Ago"}
          </Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="more-vert"
            size={22}
            color={"grey"}
            style={{ marginTop: 7 }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    width: width / 3 - 10,
    height: 90,
    marginHorizontal: 10,
    marginTop: 7,
  },
  descriptionContainer: {
    width: width / 2 + 10,
    marginTop: 8,
  },
});

export default SearchCard;
