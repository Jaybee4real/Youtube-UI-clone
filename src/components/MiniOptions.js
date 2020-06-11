import React from "react";
import { View, Text, StyleSheet, Dimensions, Image , TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const { height, width } = Dimensions.get("window");

const MiniOptions = (props) => {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.miniOption, backgroundColor: props.color }}>
        <Icon
          name={props.icon}
          size={24}
          color={"white"}
          style={{ marginRight: 20 }}
        />
        <Text style={styles.miniOptionText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MiniOptions;

const styles = StyleSheet.create({
  miniOption: {
    width: width / 2 - 15,
    height: 50,
    borderRadius: 6,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  miniOptionText: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
