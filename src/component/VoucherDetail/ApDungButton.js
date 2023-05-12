import React from "react";
import { Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;

export default function ApDungButton(){
    return(
        <TouchableOpacity style={{
            width:windowWidth-280,
            height:'60%',
            backgroundColor:'white',
            borderRadius:12,
            right:10,
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Text style={{
                color:'#FF7F3F', 
                fontWeight:'bold',
                fontSize:16,
                }}>
                    Áp dụng
            </Text>
        </TouchableOpacity>
    );
}
