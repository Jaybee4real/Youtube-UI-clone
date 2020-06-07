import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
    return (
      <View>
        <View style={styles.navBar}>
          <Image
            source={require("../img/youtube-logo.png")}
            style={{ width: 110, height: 24, marginLeft: 15 }}
          />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon name="videocam" size={24} style={styles.navbarIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon name="search" size={24} style={styles.navbarIcons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="account-circle"
                size={24}
                style={styles.navbarIcons}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }



const styles = StyleSheet.create({
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
})

export default Navbar;
