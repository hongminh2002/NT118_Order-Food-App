import React from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function DatHangButton(){
    return(
        <TouchableOpacity 
        onPress={this.onPress}
        style={{
            width:windowWidth-270,
            height:'60%',
            backgroundColor:'white',
            borderRadius:12, 
            flexDirection:'row',
            alignSelf:'center',
            justifyContent:'center',
            marginRight:20
            }}>
            <Text style={{
                color:'#FF7F3F', 
                fontWeight:'bold',
                fontSize:16,
                alignSelf:'center'
            }}>
                    Đặt hàng
            </Text>
        </TouchableOpacity>
    );
}
