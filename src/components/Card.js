import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
              <Text numberOfLines={2} style={{ fontWeight: "bold", fontSize: 16 , marginRight: 5}}>
               THE COMING SEASON 5(NEW HIT MOVIE ) DESTINY ETIKO[EVE ESIN] JERRY WILLIAMS 2020
              </Text>
              <Text style={{ color: "grey" }}>
                BBC Radio 1 · 8.4M Views · 6 years ago
              </Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="more-vert"
                size={23}
                style={{ color: "grey", marginBottom: 30 }}
              ></Icon>
            </TouchableOpacity>
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
    justifyContent: 'space-around'
  },
  titleImage: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: "grey",
    marginHorizontal: 10,
  },
  infoContainer: {
    flex: 1,
    width: width,
    justifyContent: 'center'

  },
});
export default Card;
