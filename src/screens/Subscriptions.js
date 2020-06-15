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
        {channelList.items.map((item) => <SubscriptionsCard channel={item}  key={item.id}/> )}
        </ScrollView>
        {channelVideos.items.map((item) => <Card video={item}  key={item.id}/> )}
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
