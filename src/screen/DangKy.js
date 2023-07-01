import React, { Component } from 'react';
import { useState } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image, Alert } from 'react-native';
import Constants from "expo-constants";
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, setDoc, db, doc } from "../../firebase";

const DangKy = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const register = async () => {
    if (name === "" || phone === "" || email === "" || password === "") {
      Alert.alert('Bạn chưa điền đủ thông tin', 'Vui lòng nhập lại đầy đủ thông tin', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${myUserUid}`), {
          userId: myUserUid,
          email: user,
          name: name,
          phone: phone,
          birthday: '',
          cart: [],
          address: [],
          orders: [],
        });
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          alert("The email address is already in use");
        } else if (error.code == "auth/invalid-email") {
          alert("The email address is not valid.");
        } else if (error.code == "auth/operation-not-allowed") {
          alert("Operation not allowed.");
        } else if (error.code == "auth/weak-password") {
          alert("The password is too weak.");
        }
      });
  }
  return (
    <View style={styles.container}>
      <Image source={require('../asset/Nền1.png')} style={styles.background1} />
      <Image source={require('../asset/Nền2.png')} style={styles.background2} />
      <View style={styles.page}>
        <View style={styles.logo}>
          <Image source={require('../asset/Logo1.png')} style={{ width: '80%', height: '50%' }} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={styles.content}>
            <View style={styles.input}>
              <View style={styles.icon}>
                <AntDesign name="user" size={14} color="#B9B9B9" />
              </View>
              <View style={styles.type}>
                <TextInput value={name}
                  onChangeText={(text) => setName(text)} style={styles.type} placeholder="Họ tên người dùng" />
              </View>
            </View>
            <View style={styles.input}>
              <View style={styles.icon}>
                <SimpleLineIcons name="phone" size={14} color="#B9B9B9" />
              </View>
              <View style={styles.type}>
                <TextInput value={phone}
                  onChangeText={(text) => setPhone(text)} style={styles.type} placeholder="Số điện thoại" />
              </View>
            </View>
            <View style={styles.input}>
              <View style={styles.icon}>
                <AntDesign name="user" size={14} color="#B9B9B9" />
              </View>
              <View style={styles.type}>
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.type} placeholder="Email" />
              </View>
            </View>
            <View style={styles.input}>
              <View style={styles.iconPass}>
                <AntDesign name="lock" size={16} color="#B9B9B9" />
              </View>
              <View style={styles.typePass} >
                <TextInput value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={passwordVisible} style={styles.typePass} placeholder='Mật khẩu' />
              </View>
              <TouchableOpacity style={styles.eye} onPress={() => setPasswordVisible(!passwordVisible)}>
                {!passwordVisible ? (
                  <Ionicons
                    name="eye-outline"
                    style={{
                      fontSize: 15,
                      color: "#7A7A7A",
                      opacity: 0.8,
                    }}
                  />
                ) : (
                  <Ionicons
                    name="eye-off-outline"
                    style={{
                      fontSize: 15,
                      color: "#7A7A7A",
                      opacity: 0.8,
                    }}
                  />)}
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={register}>
              <Text style={styles.signUp}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('DangNhap')}>
              <Text style={styles.login}>Đã có tài khoản? Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const TEXT = {
  textAlign: "center",
  fontSize: 12,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  background1: {
    position: 'absolute',
    width: '100%',
    height: '90%',
  },
  background2: {
    flex: 1,
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
  logo: {
    width: '60%',
    height: '12%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
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
    borderColor: '#7A7A7A',
  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  type: {
    fontSize: 13,
    flex: 4,
    color: '#7A7A7A',
  },
  iconPass: {
    flex: 1,
    top: 10,
    left: 15,
  },
  typePass: {
    fontSize: 13,
    flex: 3,
    color: '#7A7A7A',
  },
  eye: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUp: {
    ...TEXT,
    height: 35,
    fontSize: 13,
    borderRadius: 12,
    marginTop: 20,
    color: '#fff',
    backgroundColor: "#EA5C2B",
    paddingTop: 7,
  },
  login: {
    ...TEXT,
    height: 35,
    fontSize: 13,
    color: '#B9B9B9',
    paddingTop: 7,
  }
});

export default DangKy;
