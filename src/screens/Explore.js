import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Navbar from "../components/Navbar";
import MiniOptions from "../components/MiniOptions";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";
import data from "./exploreVideoData.json";

const { height, width } = Dimensions.get("window");

const Explore = () => {
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <Navbar />
      <ScrollView>
        <View style={styles.miniOptionContainer}>
          <MiniOptions title="Trending" icon="hotjar" color="#fc4e14" />
          <MiniOptions title="Music" icon="music" color="#10f1df" />
          <MiniOptions title="Gaming" icon="gamepad" color="#ff5100bb" />
          <MiniOptions title="News" icon="newspaper" color="#2052f5c2" />
        </View>

        {data.items.map((item) => <Card video={item}  key={item}/> )}
      </ScrollView>
    </View>
  );
};

export default Explore;

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
  miniOptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
  },
});
