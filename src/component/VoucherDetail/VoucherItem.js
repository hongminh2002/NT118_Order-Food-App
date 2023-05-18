import React, {useState} from "react";
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();
  const [addVoucher,setAddVoucher] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  return (
      <ScrollView showsVerticalScrollIndicator = {true}>
          {vouchers.map((voucher, index) => (
          <TouchableOpacity 
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
                flexDirection:'row'
            }}
            onPress = {() => navigation.navigate('VoucherDescription')}
          >
              <VoucherImage voucher={voucher} />
              <VoucherInfo voucher={voucher} />
              <TouchableOpacity 
              style={{flexDirection:'row', alignItems:'center'}}
              onPress={() => setAddVoucher(!addVoucher)} >
                {addVoucher ?
                <Image source={require('../../asset/VectorPlus.png')} style={{alignSelf:'center', justifyContent:'flex-end'}} />
                : 
                <Image source={require('../../asset/Tick.png')} style={{alignSelf:'center', justifyContent:'flex-end'}} />
                }
              </TouchableOpacity>
          </TouchableOpacity>
          ))}
      </ScrollView>
  );
}

const deviceWidth = Dimensions.get('window').width;

const VoucherInfo = (props) => (
  <View style={{width: deviceWidth - 175, alignSelf:'center'}}>
    <Text style={{fontSize:18, fontWeight:'600'}}>{props.voucher.title}</Text>
    <Text> {props.voucher.description} </Text>
  </View>
);

const VoucherImage = (props) => (
  <Image source={props.voucher.image} style={{marginRight:20}} /> 
);
