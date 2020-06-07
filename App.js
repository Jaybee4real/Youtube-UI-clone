import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import Search  from './src/screens/Search'
import About  from './src/screens/About'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
 </NavigationContainer>
  )
}

export default App
