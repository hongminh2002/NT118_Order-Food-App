import React, {Component} from 'react';
import {Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Constants from "expo-constants";
import { SimpleLineIcons } from '@expo/vector-icons';

const QuenMatKhau = () => {
  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../asset/Nền1.png')} style={style.background1}/>
      <Image source={require('../asset/Nền2.png')} style={style.background2}/>
      <View style={style.page}>
        <View>
          <Text style={style.pageName}>
            Quên mật khẩu
          </Text>
        </View>
        <View style={{flex:1, justifyContent: 'space-between'}}>
          <View style={style.content}>
            <Text style={style.nhap}>Nhập số điện thoại</Text>
            <View style={style.input}>
              <View style={style.icon}>
                <SimpleLineIcons name="phone" size={14} color="#B9B9B9"/>
              </View>
              <View style={style.type}>
                <TextInput style={style.type} placeholder="Số điện thoại"/>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={style.send}>Gửi</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
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
    marginTop:40,
    color: "#EA5C2B",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    width: '80%',
    alignSelf: 'center',
  },
  nhap: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 56,
    color: "#EA5C2B",
  },
  input: {
    flexDirection:'row',
    marginTop: 9,
    height: 39,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B9B9B9',
  },
  icon: {
    flex:1,
    top: 10,
    left: 15,
  },
  type: {
    fontSize: 12,
    flex:4,
    color: '#B9B9B9',
  },
  send: {
    ...TEXT,
    height: 35,
    borderRadius: 12,
    marginTop: 20,
    color: '#fff',
    backgroundColor: "#EA5C2B",
    paddingTop: 7,
  },
  signUp: {
    ...TEXT,
    height: 35,
    color: '#B9B9B9',
    paddingTop: 7,
  },
});

export default QuenMatKhau;
