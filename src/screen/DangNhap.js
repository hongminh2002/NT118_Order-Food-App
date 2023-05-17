import React, {Component} from 'react';
import {Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const DangNhap = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../asset/Nền1.png')} style={style.background1}/>
      <Image source={require('../asset/Nền2.png')} style={style.background2}/>
      <View style={style.page}>
        <View>
          <Text style={style.pageName}>
            Đăng nhập
          </Text>
        </View>
        <View style={{flex:1, justifyContent: 'space-between' }}>
          <View style={style.content}>
            <View style={style.input}>
              <View style={style.iconAccount}>
                <AntDesign name="user" size={14} color="#B9B9B9"/>
              </View>
              <View style={style.typeAccount}>
                <TextInput style={style.typeAccount} placeholder="Tên đăng nhập"/>
              </View>
            </View>
            <View style={style.input}>
              <View style={style.iconPass}>
                <AntDesign name="lock" size={16} color="#B9B9B9" />
              </View>
              <View style={style.typePass} >
                <TextInput style={style.typePass} placeholder='Mật khẩu'/>
              </View>
              <View style={style.eye}>
              <SimpleLineIcons name="eye" size={13} color="#B9B9B9" style={style.eye}/>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
            <Text style={style.login}>Đăng Nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QuenMatKhau')}>
              <Text style={style.forgetPassword}>Quên Mật Khẩu?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('DangKy')}>
              <Text style={style.signUp}>Chưa có tài khoản? Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const TEXT = {
  textAlign: "center",
  fontSize: 12,
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
    flex:1,
    position:'absolute',
    top: 100,
    width: '80%',
    height: 700,
    borderRadius: 30,
    alignSelf:'center',
  },
  page: {
    top: 100,
    width: '80%',
    height: 450,
    alignSelf:'center',
  },
  pageName : {
    ...TEXT,
    marginTop: 50,
    color: "#EA5C2B",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    flexDirection:'row',
    marginTop: 20,
    height: 39,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B9B9B9',
  },
  iconAccount: {
    flex:1,
    top: 10,
    left: 15,
  },
  typeAccount: {
    fontSize: 12,
    flex:4,
    color: '#B9B9B9',
  },
  iconPass: {
    flex:1,
    top: 10,
    left: 15,
  },
  typePass: {
    fontSize: 12,
    flex:3,
    color: '#B9B9B9',
  },
  eye:{
    flex:1,
    top: 7,
    left: 5
  },
  login: {
    ...TEXT,
    height: 35,
    borderRadius: 12,
    marginTop: 20,
    color: '#fff',
    backgroundColor: "#EA5C2B",
    paddingTop: 7,
  },
  forgetPassword: {
    ...TEXT,
    height: 35,
    marginTop: 10,
    color: '#B9B9B9',
    paddingTop: 7,
  },
  signUp: {
    ...TEXT,
    height: 35,
    color: '#B9B9B9',
    paddingTop: 7,
  },
});

export default DangNhap;
