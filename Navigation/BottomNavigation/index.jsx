import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../../Screens/HomePage';
import Login from '../../Auth/Login';
import Dogs from '../../Dogs.json'

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Dogs' component={HomePage}/>
        <Tab.Screen name='log' component={Login}/>

    </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})