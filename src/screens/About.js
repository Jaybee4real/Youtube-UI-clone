import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={style.container}>
      <Text style={style.headerText}>
        Hi, My Name Is Faith Okoroji , A.K.A (Jaybee4Real)
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
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

export default About;
