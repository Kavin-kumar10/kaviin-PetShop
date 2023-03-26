import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { myColors } from "../../Config/Color";


const Header = () =>{
    return(
        <View style={Styles.Header}>
            <Text style={{fontSize:25,color:myColors.primary}}>Home Page</Text>
            {/* <Text>First</Text> */}
        </View>
    )
}

const Styles = StyleSheet.create({
    Header:{
        flex:1.5,
        backgroundColor:myColors.tertiary,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:12
    }
})

export default Header;