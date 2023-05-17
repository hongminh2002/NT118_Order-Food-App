import React, {Component} from 'react';
import {Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../asset/Nền1.png')} style={style.background1}/>
      <Image source={require('../asset/Nền3.png')} style={style.background2}/>
      <View style={{height: 80, flexDirection:'row'}}>
        <View style={{flex:2}}>
          <FontAwesome name="user-circle-o" size={80} color="white" style={{
            left: 20,
          }}/>
        </View>
        <View style={{flex:4, justifyContent:"space-between"}}>
          <Text style={{color: "#fff", fontSize: 18, fontWeight: "bold"}}>Nguyễn Văn A</Text>
          <View style={{flexDirection:'row'}}>
            <MaterialIcons name="edit" size={15} color="white" ></MaterialIcons>
            <TouchableOpacity >
              <Text style={{color: "#fff"}}>Chỉnh sửa thông tin cá nhân</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:1}}>
          <AntDesign name="close" size={24} color="white"/>
        </View>
      </View>
      <View style={{marginTop: 21, height: 700}}>
        <View style={style.content}>
          <View style={{flexDirection:'row', flex:1}}>
            <Entypo name="location-pin" size={15} color="#EA5C2B" style={style.icon1}/>
            <Text style={style.text}>Địa chỉ</Text>
            <AntDesign name="right" size={12} color="black" style={style.icon2} />
          </View>
          <View style={{width: '100%', height:0 ,borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        </View>
        <View style={style.content}>
          <TouchableOpacity style={{flexDirection:'row', flex:1}} onPress={() => navigation.navigate('DoiMatKhau')} >
            <Entypo name="lock" size={15} color="#EA5C2B" style={style.icon1}/>
            <Text style={style.text}>Đổi mật khẩu</Text>
            <AntDesign name="right" size={12} color="black" style={style.icon2} />
          </TouchableOpacity>
          <View style={{width: '100%', height:0 ,borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        </View>
        <View style={style.content}>
          <View style={{flexDirection:'row', flex:1}}>
            <FontAwesome name="shopping-bag" size={15} color="#EA5C2B" style={style.icon1}/>
            <Text style={style.text}>Đơn hàng</Text>
            <AntDesign name="right" size={12} color="black" style={style.icon2} />
          </View>
          <View style={{width: '100%', height:0 ,borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        </View>
        <View style={style.content}>
          <View style={{flexDirection:'row', flex:1}}>
            <FontAwesome name="ticket" size={15} color="#EA5C2B" style={style.icon1}/>
            <Text style={style.text}>Ưu đãi</Text>
            <AntDesign name="right" size={12} color="black" style={style.icon2} />
          </View>
          <View style={{width: '100%', height:0 ,borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        </View>
        <View style={style.content}>
          <View style={{flexDirection:'row', flex:1}}>
            <MaterialIcons name="notifications" size={15} color="#EA5C2B" style={style.icon1}/>
            <Text style={style.text}>Thông báo</Text>
            <AntDesign name="right" size={12} color="black" style={style.icon2} />
          </View>
          <View style={{width: '100%', height:0 ,borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        </View>
        <View style={style.content}>
          <TouchableOpacity style={{flexDirection:'row', flex:1}} onPress={() => navigation.navigate('DangNhap')} >
            <MaterialIcons name="logout" size={15} color="#EA5C2B" style={style.icon1}/>
            <Text style={style.text}>Đăng xuất</Text>
            <AntDesign name="right" size={12} color="black" style={style.icon2} />
          </TouchableOpacity>
          <View style={{width: '100%', height:0 ,borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        </View>
      </View>
    </SafeAreaView>
    
  );
};

const style = StyleSheet.create({
  container:{
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  background1: {
    position:'absolute',
    width: '100%',
    height: 450,
  },
  background2: {
    position:'absolute',
    top: 125,
    width:'100%',
    height: 700,
  },
  content: {
    height: 35,
    paddingTop: 10,
  },
  icon1:{
    flex:1,
    marginLeft:10,
  },
  icon2: {
    flex:1,
  },
  text:{
    fontSize: 12,
    flex:9
  },
});
export default Account;
