import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import data from "./videodata.json";

//

const Home = () => {
  const [CardData, setCardData] = useState([]);

  // const fetchOnlineData = () => {
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=video&type=video&key=AIzaSyCXoIdJ9u4w-IttlR_bbsVd87M0-ffd02Q`)
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

  useEffect(() => {
    setCardData(data.items);
    var date = new Date("2015-04-07T03:00:03.000Z");
    var myDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    console.log(myDate);
    console.log(new Date().toISOString());
  });

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Card video={data.items[0]} />
        <Card video={data.items[1]} />
        <Card video={data.items[2]} />
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
