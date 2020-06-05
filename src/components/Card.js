import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { height, width } = Dimensions.get("window");

export class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../img/hqdefault.jpg")}
          style={styles.cardImage}
        />
        <View style={styles.detailsContainer}>
          <Image style={styles.titleImage} />
          <View style={styles.infoContainer}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Eminem - Stan Live For BBC Radio 1
              </Text>
              <Text style={{ color: "grey" }}>
                BBC Radio 1 · 8.4M Views · 6 years ago
              </Text>
            </View>
            <Icon name="more-vert" size={24} style={{marginLeft:''}}></Icon>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    marginVertical: 5,
  },
  cardImage: {
    height: 230,
  },
  detailsContainer: {
    height: 70,
    width: width,
    borderBottomWidth: 2,
    borderBottomColor: "#E6E6E6",
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  titleImage: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: "grey",
    marginHorizontal: 10,
  },
  infoContainer: {
    width: width,
    marginBottom: 10,
    flexDirection: "row",
  },
});
export default Card;
