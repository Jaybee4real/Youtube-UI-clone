import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Trending from "./src/screens/Trending";
import Subscriptions from "./src/screens/Subscriptions";
import Settings from "./src/screens/Settings";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tabs = createBottomTabNavigator()

  const createTabs = () => {
  return (
    <Tabs.Navigator>
        <Tabs.Screen Screen name="Home" component={Home} />
        <Tabs.Screen Screen name="Trending" component={Trending} />
        <Tabs.Screen Screen name="Subscriptions" component={Subscriptions} />
    </Tabs.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" children={createTabs} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
