import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Home from "./Home";
import Explore from "./Explore";
import Inbox from "./Inbox";
import Library from "./Library";
import Subscriptions from "./Subscriptions";
import Settings from "./Settings";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import About from "./About";

const { width } = Dimensions.get("window");
const Tabs = createBottomTabNavigator();

const createTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Explore") {
            iconName = focused ? "explore" : "explore";
          } else if (route.name === "Subscriptions") {
            iconName = focused ? "subscriptions" : "subscriptions";
          } else if (route.name === "Inbox") {
            iconName = focused ? "mail" : "mail";
          } else if (route.name === "Library") {
            iconName = focused ? "video-library" : "video-library";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        style: {
          borderRadius:35, 
          position:'absolute',
          bottom: 3,
          padding: 10,
          marginHorizontal: 15,
          width: width-30,
          height: 100,
          zIndex: 8 
        },
      }}
    >
      <Tabs.Screen Screen name="Home" component={Home} />
      <Tabs.Screen Screen name="Explore" component={Explore} />
      <Tabs.Screen Screen name="Subscriptions" component={Subscriptions} />
      <Tabs.Screen Screen name="Inbox" component={Inbox} />
      <Tabs.Screen Screen name="Library" component={Library} />
    </Tabs.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export default class HomeScreen extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" children={createTabs} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
  }
}
