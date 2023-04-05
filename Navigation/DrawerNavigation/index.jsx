import React from 'react';
import { StyleSheet, Text,Alert,Image,Button, View,SafeAreaView,Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBar from './SideBar';
import HomePage from '../../Screens/Mainpage';
import BottomNavigation from '../BottomNavigation';
const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props=><SideBar {...props}/>}
      screenOptions={{
        headerShown:false
      }}
      initialRouteName={'HomePage'}
    >
      <Drawer.Screen name='HomePage' component={BottomNavigation}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})