import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function DatHangButton(){
    return(
        <TouchableOpacity 
        onPress={this.onPress}
        style={{
            width:130,
            height:'60%',
            marginTop:20,
            marginLeft:100,
            backgroundColor:'white',
            borderRadius:12, 
            justifyContent:'center', 
            alignItems:'center'
            }}>
            <Text style={{
                color:'#FF7F3F', 
                fontWeight:'bold',
                fontSize:16,
            }}>
                    Đặt hàng
            </Text>
        </TouchableOpacity>
    );
}
