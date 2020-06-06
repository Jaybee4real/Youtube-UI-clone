import React, { useState , useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

//

const Home = () => {
  const [CardData, setCardData] = useState([
    //
  ]);


  const fetchData = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=video&type=video&key=AIzaSyCXoIdJ9u4w-IttlR_bbsVd87M0-ffd02Q`)
      .then(data => data.json())
      .then(data => {
        setCardData(data)
        console.log(data)
    })

      .catch(err => {
      console.log(`this is the error ${error}`)
    })
  }

  useEffect(() => {
    fetchData()
    }, [])
  return (
    <View style={styles.container}>
      <Navbar />
      {/* <FlatList data={CardData} renderItem={(item) => {
        return <Card />
      }}/> */}
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
