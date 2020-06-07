import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../components/Navbar";

const Library = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>This Is The Library Screen</Text>
    </View>
  );
};

export default Library;

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
