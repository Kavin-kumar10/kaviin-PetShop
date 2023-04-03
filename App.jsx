import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './Navigation/AuthNavigation';
import { ListProvider } from './Context/ListContext';
import DrawerNavigation from './Navigation/DrawerNavigation';

export default function App() {
  return (
    <>
    <ListProvider>    
    <NavigationContainer>
      <AuthNavigation/>
      {/* <DrawerNavigation/> */}
    </NavigationContainer>
    </ListProvider>
    </>
  );
}

