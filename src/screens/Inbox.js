import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import InboxCard from '../components/InboxCard'
import data from './videodata.json'
import channelList from "./channelList.json";

const Inbox = () => {
    return (
        <View style={styles.container}>
            <Navbar />
        <InboxCard channel={channelList.items[0]} video={data.items[0]} />
        <InboxCard channel={channelList.items[3]} video={data.items[3]}/>
        </View>
    )
}

export default Inbox

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
})
