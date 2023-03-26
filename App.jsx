import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import Main from './Components/Main';
import SignUp from './Components/SignUp';
import Intro from './Components/Intro';
// import { ListProvider } from './Context/ListProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    {/* <ListProvider>     */}
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Intro">
      <Stack.Screen  name="Intro" component = {Intro}/>
      <Stack.Screen  name="Sign" component = {SignUp}/>
      <Stack.Screen  name="Log" component = {Login}/>
      <Stack.Screen  name="Home" component = {Main}/>
      </Stack.Navigator>
    </NavigationContainer>
    {/* </ListProvider> */}
    </>
  );
}

