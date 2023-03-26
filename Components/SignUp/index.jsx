import React, { useContext } from 'react'
import { StyleSheet, Text, View,StatusBar,Button, TextInput,Dimensions,TouchableOpacity } from 'react-native'
import { myColors } from '../../Config/Color'
import Sign from '../../assets/SignUp.svg';
// import { ListContext } from '../../Context/ListProvider';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;


export default function SignUp({navigation}){
  // const [Users,setUsers,User,setUser] = useContext(ListContext);

  return (
    <View style={styles.SignUp}>
      <Sign height={300} width={300}/>
      <View>
        <Text style={styles.head}>SignUp</Text>
        <View style={styles.field}>
          <TextInput style={styles.textInp} placeholder={'UserName'} keyboardType={"default"}/>
        </View>
        <View style={styles.field}>
          <TextInput style={styles.textInp} placeholder={'ab***@gmail.com'} keyboardType={"default"}/>
        </View>
        <View style={styles.field}>
          <TextInput style={styles.textInp} placeholder={'Password'} secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Log')}>
          <Text style={styles.btnTxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    SignUp:{
        maxHeight:ScreenHeight+100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:myColors.primary
    },
    head:{
      color:myColors.tertiary,
      borderColor:myColors.tertiary,
      borderBottomWidth:2,
      paddingBottom:10,
      // alignSelf:'center',
      fontSize:40,
      margin:20
    },
    field:{
      padding:5,
      paddingVertical:5,
      margin:10,
    },  
    textInp:{
      borderColor:myColors.secondary,
      paddingHorizontal:2,
      paddingVertical:8,
      borderBottomWidth:2,
      width:300,
      fontSize:20
    },
    btn:{
      height:50,
      width:ScreenWidth-100,
      marginVertical:30,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
      alignSelf:'center',
      backgroundColor:myColors.tertiary,
    },
    btnTxt:{
      fontSize:25,
      color:myColors.primary,
    }
})