import React from 'react';
import { StyleSheet, Text,Alert,Image,Button, View,SafeAreaView,Platform } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';


export default function Main() {
  // console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Body/>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection:"column",
    paddingTop:Platform.OS === "android" ? 35 : 0 
  },
});
