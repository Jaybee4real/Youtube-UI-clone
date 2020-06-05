import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image
          source={require("../../assets/img/youtube-logo.png")}
          style={{ width: 110, height: 24, marginLeft: 15 }}
        />
        <View style={styles.rightNav}>
          <TouchableOpacity>
            <Icon name="videocam" size={24} style={styles.navbarIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search" size={24} style={styles.navbarIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="account-circle" size={24} style={styles.navbarIcons} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 23,
  },
  navBar: {
    height: 55,
    backgroundColor: "white",
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
  navbarIcons: {
    marginRight: 15,
    color: "#3c3c3cde",
  },

  body: {
      flex: 1,
    //   backgroundColor: '#d3d3d32a'
  },
});
