import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Explore from "./src/screens/Explore";
import Inbox from "./src/screens/Inbox";
import Library from "./src/screens/Library";
import Subscriptions from "./src/screens/Subscriptions";
import Settings from "./src/screens/Settings";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";



const Tabs = createBottomTabNavigator()

  const createTabs = () => {
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Explore') {
          iconName = focused ? 'explore' : 'explore';
        }
        else if (route.name === 'Subscriptions') {
          iconName = focused ? 'subscriptions' : 'subscriptions';
        }
        else if (route.name === 'Inbox') {
          iconName = focused ? 'mail' : 'mail';
        }
        else if (route.name === 'Library') {
          iconName = focused ? 'video-library' : 'video-library';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
        <Tabs.Screen Screen name="Home" component={Home} />
        <Tabs.Screen Screen name="Explore" component={Explore} />
        <Tabs.Screen Screen name="Subscriptions" component={Subscriptions} />
        <Tabs.Screen Screen name="Inbox" component={Inbox} />
        <Tabs.Screen Screen name="Library" component={Library} />
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



