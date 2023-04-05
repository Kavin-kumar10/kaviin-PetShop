import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../../Screens/Intro';
import SignUp from '../../Auth/SignUp';
import Login from '../../Auth/Login';
import DrawerNavigation from '../DrawerNavigation';
import BottomNavigation from '../BottomNavigation';
import React from 'react'
import Home from '../../Screens/Home';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Intro">
        <Stack.Screen  name="Intro" component = {Intro}/>
        <Stack.Screen  name="Sign" component = {SignUp}/>
        <Stack.Screen  name="Log" component = {Login}/>
        <Stack.Screen name='DrawerRoot' component={DrawerNavigation}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='BottomRoot' component={BottomNavigation}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})