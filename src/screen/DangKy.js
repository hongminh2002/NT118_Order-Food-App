import React, { Component } from 'react';
import { useState } from 'react';
 

import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image, Alert } from 'react-native';
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword} from "firebase/auth"; 
import {auth} from "../firebase"; 

const DangKy = ({ navigation }) => {
 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
    if( name ==="" || phone ==="" || email ==="" || password ==="" ){
      Alert.alert('Bạn chưa điền đủ thông tin', 'Vui lòng nhập lại đầy đủ thông tin', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("userCredential", userCredential);
      const user = userCredential._tokenResponse.email;
      const myUserUid = auth.currentUser.uid;

      setDoc(doc(db, "users", `${myUserUid}`), {
        email:user,
        phone:phone,
      })
    })
  }
  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../asset/Nền1.png')} style={style.background1} />
      <Image source={require('../asset/Nền2.png')} style={style.background2} />
      <View style={style.page}>
        <View>
          <Text style={style.pageName}>
            Đăng ký
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={style.content}>
            <View style={style.input}>
              <View style={style.icon}>
                <AntDesign name="user" size={14} color="#B9B9B9" />
              </View>
              <View style={style.type}>
                <TextInput value={name}
                  onChangeText={(text) => setName(text)} style={style.type} placeholder="Họ tên người dùng" />
              </View>
            </View>
            <View style={style.input}>
              <View style={style.icon}>
                <SimpleLineIcons name="phone" size={14} color="#B9B9B9" />
              </View>
              <View style={style.type}>
                <TextInput value={phone}
                  onChangeText={(text) => setPhone(text)} style={style.type} placeholder="Số điện thoại" />
              </View>
            </View>
            <View style={style.input}>
              <View style={style.icon}>
                <AntDesign name="user" size={14} color="#B9B9B9" />
              </View>
              <View style={style.type}>
                <TextInput 
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={style.type} placeholder="Tên đăng nhập" />
              </View>
            </View>
            <View style={style.input}>
              <View style={style.iconPass}>
                <AntDesign name="lock" size={16} color="#B9B9B9" />
              </View>
              <View style={style.typePass} >
                <TextInput value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}  style={style.typePass} placeholder='Mật khẩu' />
              </View>
              <View style={style.eye}>
                <SimpleLineIcons name="eye" size={13} color="#B9B9B9" style={style.eye} />
              </View>
            </View>
            <TouchableOpacity onPress={register}>
              <Text style={style.login}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('DangNhap')}>
              <Text style={style.signUp}>Đã có tài khoản? Đăng nhập</Text>
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
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  background1: {
    position: 'absolute',
    width: '100%',
    height: 450,
  },
  background2: {
    position: 'absolute',
    top: 100,
    width: '80%',
    height: 700,
    borderRadius: 30,
    alignSelf: 'center',
  },
  page: {
    top: 100,
    width: '80%',
    height: 450,
    alignSelf: 'center',
  },
  pageName: {
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
    flexDirection: 'row',
    marginTop: 20,
    height: 39,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B9B9B9',
  },
  icon: {
    flex: 1,
    top: 10,
    left: 15,
  },
  type: {
    fontSize: 12,
    flex: 4,
    color: '#B9B9B9',
  },
  iconPass: {
    flex: 1,
    top: 10,
    left: 15,
  },
  typePass: {
    fontSize: 12,
    flex: 3,
    color: '#B9B9B9',
  },
  eye: {
    flex: 1,
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
  signUp: {
    ...TEXT,
    height: 35,
    color: '#B9B9B9',
    paddingTop: 7,
  }
});

export default DangKy;
