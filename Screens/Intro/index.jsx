import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native'
import { myColors } from '../../Config/Color'
import MyImg from '../../assets/Front.svg'
import React from 'react'

export default Intro = ({navigation}) => {
  return (
    <View style={styles.Intro}>
      <View style={styles.imgContain}>
        <MyImg height={300} width={300}/>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descTxt}>Find out your companion on pet shelter</Text>
        <Text style={styles.descPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus inventore quaerat id, ullam pariatur doloremque animi fuga tempora reprehenderit quas!</Text>
      </View>
      <View style={styles.btnContain}>
        <TouchableOpacity style={styles.introBtn} onPress={()=>navigation.navigate('Sign')}>
            <Text style={styles.btnName}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.introBtn} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.btnName}>Demo User</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Intro:{
      flex:1,
      backgroundColor:myColors.tertiary,
      padding:5,
      alignItems:"center",
      justifyContent:"space-around",
      flexDirection:'column'
    },
    imgContain:{
      flex:2,
      alignItems:"center",
      justifyContent:"center",
    },  
    desc:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:30,
    },
    descTxt:{
      lineHeight:40,
      fontWeight:'400',
      color:myColors.primary,
      textAlign:'center',
      fontSize:30,
    },
    descPara:{
      color:myColors.primary,
      marginTop:30,
      padding:12,
      textAlign:'center'
    },
    btnContain:{
      flex:0.5,
      width:350,
      alignItems:"center",
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
      marginTop:12,
      marginHorizontal:12,
      borderRadius:12,    
    },
})