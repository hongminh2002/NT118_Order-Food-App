import React from "react";
import { View, Text } from "react-native";
import DatHangButton from "./DatHangButton";

export default function CheckOut(){
    return(
        <View style={{
            height:75,
            borderRadius:12,
            backgroundColor:'#EA5C2B',
            position:'absolute',
            left:0,
            right:0,
            top:557,
            flexDirection:'row'
        }}>
            <View style={{marginLeft:25, justifyContent:'center'}}>
                <Text style={{color:'white', fontSize:17, fontWeight:"bold"}}>
                    Tổng thanh toán
                </Text>
                <Text style={{color:'white', fontSize:17, fontWeight:'bold'}}>
                    264.000 VNĐ
                </Text>
            </View>
            <DatHangButton />
        </View>
    );
}