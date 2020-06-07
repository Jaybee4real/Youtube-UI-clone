import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SubscriptionsCard from "../components/SubscriptionsCard";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import channelList from "./channelList.json";
import channelVideos from "./channelVideos.json";

const Home = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <ScrollView horizontal={true} >
          <SubscriptionsCard channel={channelList.items[0]} />
          <SubscriptionsCard channel={channelList.items[1]} />
          <SubscriptionsCard channel={channelList.items[2]} />
          <SubscriptionsCard channel={channelList.items[3]} />
          <SubscriptionsCard channel={channelList.items[4]} />
        </ScrollView>

        <Card video={channelVideos.items[0]} />
        <Card video={channelVideos.items[1]} />
        <Card video={channelVideos.items[2]} />
        <Card video={channelVideos.items[3]} />
        <Card video={channelVideos.items[4]} />
      </ScrollView>
    </View>
  );
};

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
});

export default Home;
