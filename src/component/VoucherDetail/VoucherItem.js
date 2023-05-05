import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const vouchers = [
  {
    title : "Giảm 10% đơn từ 200K",
    description : "Giảm tối đa 30K",
    image : require('../../asset/VoucherImage.png')
  },
  {
    title : "Giảm 5% đơn từ 150K",
    description : "Giảm tối đa 20K",
    image : require('../../asset/VoucherImage.png')
  },
  {
    title : "Miễn phí giao hàng",
    description : "Giảm phí vận chuyển tối đa 15K",
    image : require('../../asset/FreeshipImage.png')
  },
  {
    title : "Giảm 20% đơn từ 300K",
    description : "Giảm tối đa 35K",
    image : require('../../asset/VoucherImage.png')
  }
];

export default function VoucherItem() {
    return (
        <ScrollView showsVerticalScrollIndicator = {true}>
            {vouchers.map((voucher, index) => (
            <View 
                key={index} 
                style = {{
                    width:"90%",
                    height:81,
                    backgroundColor:"white",
                    borderRadius:12,
                    borderBottomWidth:2,
                    borderBottomColor:"#D9D9D9",
                    marginTop:20,
                    alignSelf:'center',
                    flexDirection:'row',
                    justifyContent:'space-between'
                    }}>
                <VoucherImage voucher={voucher} />
                <VoucherInfo voucher={voucher} />
                <Image source={require('../../asset/VectorPlus.png')} style={{top:32, right:15}}/>
            </View>
            ))}
        </ScrollView>
    );
}

const VoucherInfo = (props) => (
  <View style={{top:20}}>
    <Text style={{fontSize:18, fontWeight:'600'}}>{props.voucher.title}</Text>
    <Text> {props.voucher.description} </Text>
  </View>
);

const VoucherImage = (props) => (
  <Image source={require('../../asset/VoucherImage.png')} /> 
);
