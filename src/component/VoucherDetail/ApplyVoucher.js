import React from "react";
import { View, Text } from "react-native";
import ApDungButton from "../VoucherDetail/ApDungButton";

export default function ApplyVoucher(){
    return(
        <View style={{
            height:65,
            borderRadius:12,
            backgroundColor:'#EA5C2B',
            position:'absolute',
            left:0,
            right:0,
            top:567,
            flexDirection:'row'
        }}>
            <View style={{marginLeft:15, justifyContent:'center'}}>
                <Text style={{color:'white', fontSize:17, fontWeight:"bold"}}>
                    1 voucher đã được chọn
                </Text>
            </View>
            <ApDungButton />
        </View>
    );
}