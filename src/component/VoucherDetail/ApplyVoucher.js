import React from "react";
import { View, Text } from "react-native";
import ApDungButton from "../VoucherDetail/ApDungButton";

export default function ApplyVoucher(){
    return(
        <View style={{
            height:'10%',
            bottom:5,
            borderRadius:12,
            backgroundColor:'#EA5C2B',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <View style={{left:10}}>
                <Text style={{color:'white', fontSize:17, fontWeight:"bold"}}>
                    1 voucher đã được chọn
                </Text>
            </View>
            <ApDungButton />
        </View>
    );
}
