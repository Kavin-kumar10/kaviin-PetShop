import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { myColors } from '../../Config/Color'
import IntroImg from '../../assets/Front.svg'
import React from 'react'

export default Intro = ({navigation}) => {
  return (
    <View style={styles.Intro}>
      <IntroImg  width={250}/>
      <View style={styles.btnContain}>
        <TouchableOpacity style={styles.introBtn} onPress={()=>navigation.navigate('Log')}>
            <Text style={styles.btnName}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.introBtn} onPress={()=>navigation.navigate('Sign')}>
            <Text style={styles.btnName}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Intro:{
      flex:1,
      backgroundColor:myColors.tertiary,
      alignItems:"center",
      justifyContent:"center",
    },
    btnContain:{
      width:350,
      flexDirection:"row",
    },  
    btnName:{
      color:myColors.tertiary,
      fontSize:20
    },  
    introBtn:{
      height:50,
      width:150,
      backgroundColor:myColors.primary,
      alignItems:"center",
      justifyContent:"center",
      margin:12,
      borderRadius:12,    
    }
})