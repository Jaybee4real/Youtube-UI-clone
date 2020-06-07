import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Navbar from "../components/Navbar";
import MiniOptions from "../components/MiniOptions";

const { height, width } = Dimensions.get("window");

const Explore = () => {
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <Navbar />
      <View style={styles.miniOptionContainer}>
        <MiniOptions title="Trending" icon="hotjar" />
        <MiniOptions title="Music" icon="music" />
        <MiniOptions title="Gaming" icon="gamepad" />
        <MiniOptions title="News" icon="newspaper" />
      </View>
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
