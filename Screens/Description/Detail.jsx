import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { myColors } from '../../Config/Color'
import Ionicon from '@expo/vector-icons/Ionicons'

const Detail = ({desc}) => {
  return (
    <View style={styles.Detail}>
      <View style={styles.Description}>
        <Text style={{fontSize:30}}>Description</Text>
        <Text style={{color:'grey',opacity:0.8,marginTop:15}}>
            {desc.description}
        </Text>
      </View>
      
      <TouchableOpacity style={styles.Btn}>
            <Text style={{color:myColors.primary,fontSize:20,letterSpacing:5}}>Add To Cart</Text>
            <Ionicon name='cart' size={20} color={myColors.primary} style={{marginHorizontal:12}}/>
        </TouchableOpacity>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    Detail:{
        flex:1.5,
        marginHorizontal:10,
        marginTop:0,
        alignItems:'center',
        justifyContent:'center',
    },
    Btn:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:20,
        borderRadius:12,
        height:50,
        backgroundColor:myColors.tertiary
    },
})