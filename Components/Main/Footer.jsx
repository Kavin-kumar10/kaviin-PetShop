import React from "react";
import { View,StyleSheet,ScrollView } from "react-native";
import { myColors } from "../../Config/Color";

const Footer = () =>{
    return(
        <View  style={Styles.Footer}>
            <View style={Styles.Box}></View>
            <View style={Styles.Box}></View>
            <View style={Styles.Box}></View>
            <View style={Styles.Box}></View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Footer:{
        flex:3,
        backgroundColor:myColors.tertiary,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },
    Box:{
        height:70,
        width:70,
        backgroundColor:myColors.primary,
        borderRadius:12,
        margin:10,
        padding:12,
        elevation:5,
        shadowColor:myColors.secondary,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:1,
        shadowRadius:1,
        // borderColor:"black",
        // borderWidth:1,
    }
})

export default Footer;