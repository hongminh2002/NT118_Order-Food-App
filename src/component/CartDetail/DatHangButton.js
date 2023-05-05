import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DatHangButton(){
    return(
        <TouchableOpacity style={{
            padding:7,
            width:130,
            marginTop:20,
            marginLeft:100,
            backgroundColor:'white',
            borderRadius:12
            }}>
            <Text style={{
                color:'#FF7F3F', 
                fontWeight:'bold',
                fontSize:16,
                alignSelf:'center'}}>
                    Đặt hàng
            </Text>
        </TouchableOpacity>
    );
}