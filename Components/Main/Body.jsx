import React from "react";
import { View,StyleSheet } from "react-native";
import { myColors } from "../../Config/Color";
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Body = () =>{
    return(
        <View style={Styles.Body}>
            {/* <FontAwesome name="facebook" size={40} color="blue"/> */}
        </View>
    )
}

const Styles = StyleSheet.create({
    Body:{
        flex:20,
        backgroundColor:"white"
    }
})

export default Body;