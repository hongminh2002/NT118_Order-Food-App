import React from "react";
import { View, Text, Dimensions } from "react-native";
import DatHangButton from "./DatHangButton";

const windowWidth = Dimensions.get('window').width;

export default function CheckOut(){
    return(
        <View style={{
            height:'12%',
            width:windowWidth,
            borderRadius:12,
            backgroundColor:'#EA5C2B',
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
            <View style={{marginLeft:20, justifyContent:'center'}}>
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
