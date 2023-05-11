import React, {Component} from 'react';
import {Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Constants from "expo-constants";
import { SimpleLineIcons } from '@expo/vector-icons';

const XacThuc = () => {
  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../asset/Nền1.png')} style={style.background1}/>
      <Image source={require('../asset/Nền2.png')} style={style.background2}/>
      <View style={style.page}>
        <View>
          <Text style={style.pageName}>
            Xác thực
          </Text>
        </View>
        <View style={{flex:1, justifyContent: 'space-between'}}>
          <View style={style.content}>
            <Text style={style.nhap}>Nhập mã xác minh</Text>
            <View style={style.input}>
                <View style={style.circle}>
                    <TextInput style={style.number} placeholder="5"/>
                </View>
                <View style={style.circle}>
                    <TextInput style={style.number} placeholder="5"/>
                </View>
                <View style={style.circle}>
                    <TextInput style={style.number} placeholder="5"/>
                </View>
                <View style={style.circle}>
                    <TextInput style={style.number} placeholder="0"/>
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
    justifyContent:'space-around',
  },
  circle: {
    borderRadius: 1000,
    borderColor:'#B9B9B9',
    width:39,
    borderWidth: 1,
  },
  number:{
    textAlign:'center',
    color:"black",
    fontSize: 25,
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

export default XacThuc;
