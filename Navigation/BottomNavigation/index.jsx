import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MainPage from '../../Screens/Mainpage';
import Home from '../../Screens/Home';
import Login from '../../Auth/Login';
import Dogs from '../../JSON/Dogs.json'
import Cats from '../../JSON/Cats.json'
import { myColors } from '../../Config/Color';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={({route})=>({
      headerShown:false,
      tabBarIcon:({color,size,focused})=>{
        let iconName;
        if(route.name == 'Dogs'){
          iconName = focused?'dog':'dog';
        }
        else if(route.name == 'Cats'){
          iconName = focused?'cat':'cat';
        }
        else if(route.name == 'Home'){
          iconName = focused?'home':'home';
        }
        return <FontAwesome5 name={iconName} size={22} color={myColors.primary}/>
      },
      tabBarActiveTintColor:myColors.primary,
      tabBarActiveBackgroundColor:myColors.tertiary,
      tabBarInactiveBackgroundColor:myColors.tertiary,
      tabBarInactiveTintColor:myColors.primary,
    })}
    
    >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Dogs' component={MainPage}/>
        <Tab.Screen name='Cats' component={MainPage}/>
        <Tab.Screen name='log' component={Login}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})