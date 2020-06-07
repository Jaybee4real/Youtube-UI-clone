import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("window");

const MiniOptions = (props) => {
  return (
    <View>
      <View style={styles.miniOption}>
        <Icon name={props.icon} size={24} color={"white"} style={{marginRight: 10}}/>
        <Text style={styles.miniOptionText}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default MiniOptions;

const styles = StyleSheet.create({
  miniOption: {
    width: width / 2 - 15,
    height: 46,
    borderRadius: 6,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
    flexDirection: 'row'
  },
  miniOptionText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },
});
