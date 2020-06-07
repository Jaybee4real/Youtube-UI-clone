import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SubscriptionsCard = (props) => {
  let channel = props.channel;
  return (
    <View style={{ height: 70, marginVertical: 10, marginHorizontal: 10}}>
      <Image
        source={{ uri: channel.snippet.thumbnails.medium.url }}
        style={{ height: "100%", width: 70, borderRadius: "50%" }}
        resizeMode="contain"
      />
          <Text maxLength={10} style={{ textAlign: "center", maxWidth: 70, height: 23, marginVertical: 5 }}>{channel.snippet.title}</Text>
    </View>
  );
};

export default SubscriptionsCard;
