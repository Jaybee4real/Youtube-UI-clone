import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Navbar from "../components/Navbar";
import Icon from "react-native-vector-icons/MaterialIcons";
import Minicard from "../components/Minicard";
import data from "./exploreVideoData.json";

const { width } = Dimensions.get("window");
const Library = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Text
          style={{ marginVertical: 10, fontSize: 18, textAlign: "center" }}
        >
          Recent
        </Text>
        <ScrollView style={{ height: 180 }} horizontal={true}>
          <Minicard video={data.items[9]} />
          <Minicard video={data.items[10]} />
          <Minicard video={data.items[15]} />
          <Minicard video={data.items[14]} />
          <Minicard video={data.items[11]} />
        </ScrollView>
        <View style={styles.options}>
          <Icon name="history" size={30} style={{ marginHorizontal: 14 }} />
          <Text style={{ fontSize: 18 }}>History</Text>
        </View>

        <View style={styles.options}>
          <Icon name="get-app" size={30} style={{ marginHorizontal: 14 }} />
          <Text style={{ fontSize: 18 }}>Downloads</Text>
        </View>

        <View style={styles.options}>
          <Icon name="thumb-up" size={23} style={{ marginHorizontal: 14 }} />
          <Text style={{ fontSize: 18 }}>Your Liked Videos</Text>
        </View>

        <View style={styles.options}>
          <Icon name="watch-later" size={26} style={{ marginHorizontal: 14 }} />
          <Text style={{ fontSize: 18 }}>Watch Later</Text>
        </View>
        <View style={styles.playlistContainer}
      </ScrollView>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 37,
      },
      android: {
        marginTop: 24,
      },
    }),
  },
  options: {
    width: width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginTop: 5,
    height: 45,
  },
});
