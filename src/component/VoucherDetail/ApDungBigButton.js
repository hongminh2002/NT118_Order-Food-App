import React from "react";
import { View, Text } from "react-native";

export default function ApDungBigButton (){
    return(
        <View style={{
            height:62,
            borderRadius:12,
            backgroundColor:'#EA5C2B',
            width:'90%', 
            justifyContent:'center', 
            alignItems:'center',
            alignSelf:'center',
            marginBottom:5
            }}>
                <Text style={{color:'white', fontSize:20, fontWeight:"bold"}}>Áp dụng</Text>
        </View>
    );
}