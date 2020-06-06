import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Card />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },

  body: {
    flex: 1,
    //   backgroundColor: '#d3d3d32a'
  },
});
