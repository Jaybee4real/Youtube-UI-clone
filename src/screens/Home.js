import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import data from "./videodata.json";


const Home = () => {
  // const [CardData, setCardData] = useState([]);

  // const fetchOnlineData = () => {
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${songs}&key=AIzaSyCXoIdJ9u4w-IttlR_bbsVd87M0-ffd02Q`)
  //     .then(data => data.json())
  //     .then(data => {
  //       setCardData(data)
  //       console.log(data)
  //   })

  //     .catch(err => {
  //     console.log(`this is the error ${error}`)
  //   })
  // }

  // useEffect(() => {
  //   fetchLocalData()
  // }, [])

  // useEffect(() => {
  //   setCardData(data.items);
  // });

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={{marginTop: 10}}>
        {data.items.map((item) => <Card video={item}  key={item}/> )}
      </ScrollView>
    </View>
  );
};

export default Home;

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
