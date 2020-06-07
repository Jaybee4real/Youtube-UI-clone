import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from '../components/Navbar'

const Inbox = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <Text> This Is The Inbox Screen</Text>
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
