import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function VoucherDes(){
    const navigation = useNavigation();
    return(
        <View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                height:52,
                backgroundColor:'white',
                borderBottomColor:'#989292',
                borderBottomWidth:1.5
            }}>
                <TouchableOpacity onPress = {() => navigation.goBack()}>
                </TouchableOpacity>
                <Text style={{
                    fontSize:25, 
                    fontWeight:'bold',
                    marginLeft:30}}>
                    Giảm 10% đơn từ 200K
                </Text>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                height:75,
                backgroundColor:'white',
                borderBottomColor:'#989292',
                borderBottomWidth:1.5,
                justifyContent:'center'
            }}>
                <View style={{
                    flexDirection:'column',
                    width:'50%',
                    height:60,
                    borderRadius:30,
                    backgroundColor:'#F12626',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Ngày kết thúc</Text>
                    <Text style={{fontSize:17, color:'white'}}>02/04/2023</Text>
                </View>
            </View>
            <ScrollView 
                style={{
                    marginTop:20, 
                    marginLeft:20, 
                    marginRight:20}}
                showsHorizontalScrollIndicator='false'
            >
                <Text style={{fontSize:18, fontWeight:'300'}}>- Ưu đãi giảm 10% cho đơn hàng từ 200.000đ.</Text>
                <Text style={{fontSize:18, fontWeight:'300'}}>- Chỉ áp dụng trên giá trị đơn hàng, không áp dụng trên phí giao hàng.</Text>
                <Text style={{fontSize:18, fontWeight:'300'}}>- Số lượng ưu đãi giới hạn mỗi ngày.</Text>
                <Text style={{fontSize:18, fontWeight:'300'}}>- Ưu đãi có áp dụng cho đơn hàng lấy tại quán.</Text>
            </ScrollView>
        </View>
        
    );
}
