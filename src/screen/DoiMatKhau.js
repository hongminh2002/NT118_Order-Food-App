import React, { Component } from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';

import { getAuth, signInWithEmailAndPassword, updatePassword } from "firebase/auth";


const DoiMatKhau = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  //change Password
  const changePassword = (currentPassword, newPassword, newPasswordConfirm) => {
    const auth = getAuth();
    const user = auth.currentUser;
    // Kiểm tra xem mật khẩu có bằng nhau khum
    if (newPassword == newPasswordConfirm) {
      // Xác minh mật khẩu cũ
      signInWithEmailAndPassword(auth, user.email, currentPassword)
        .then(() => {
          // Nếu xác minh thành công, tiến hành thay đổi mật khẩu
          updatePassword(user, newPassword)
            .then(() => {
              alert("Đổi mật khẩu thành công");
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
        })
        .catch((error) => {
          alert("Xác minh mật khẩu cũ không thành công: " + error.message);
        });
    } else {
      alert("Mật khẩu xác nhận không đúng! Mời nhập lại!")
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../asset/Nền1.png')} style={style.background1} />
      <Image source={require('../asset/Nền2.png')} style={style.background2} />
      <AntDesign onPress={() => navigation.goBack()}  name="close" size={24} color="white" style={{
        position: 'absolute',
        top: 38,
        left: 345,
      }} />
      <View style={style.page}>
        <View>
          <Text style={style.pageName}>
            Đổi mật khẩu
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={style.content}>
            <Text style={style.nhap}>Nhập mật khẩu cũ</Text>
            <View style={style.input}>
              <View style={style.icon}>
                <AntDesign name="lock" size={16} color="#B9B9B9" />
              </View>
              <View style={style.type} >
                <TextInput value={currentPassword} onChangeText={(text) => setCurrentPassword(text)} style={style.type} placeholder='Mật khẩu' />
              </View>
              <View style={style.eye}>
                <SimpleLineIcons name="eye" size={13} color="#B9B9B9" style={style.eye} />
              </View>
            </View>
            <Text style={style.nhap}>Nhập mật khẩu mới</Text>
            <View style={style.input}>
              <View style={style.icon}>
                <AntDesign name="lock" size={16} color="#B9B9B9" />
              </View>
              <View style={style.type} >
                <TextInput value={newPassword}
                  onChangeText={(text) => setNewPassword(text)} style={style.type} placeholder='Mật khẩu' />
              </View>
              <View style={style.eye}>
                <SimpleLineIcons name="eye" size={13} color="#B9B9B9" style={style.eye} />
              </View>
            </View>
            <Text style={style.nhap}>Xác nhận mật khẩu</Text>
            <View style={style.input}>
              <View style={style.icon}>
                <AntDesign name="lock" size={16} color="#B9B9B9" />
              </View>
              <View style={style.type} >
                <TextInput value={newPasswordConfirm}
                  onChangeText={(text) => setNewPasswordConfirm(text)} style={style.type} placeholder='Mật khẩu' />
              </View>
              <View style={style.eye}>
                <SimpleLineIcons name="eye" size={13} color="#B9B9B9" style={style.eye} />
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => {
              changePassword(currentPassword, newPassword, newPasswordConfirm)
            }}>
              <Text style={style.send}>Đổi mật khẩu</Text>
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
    marginTop: 40,
    color: "#EA5C2B",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    width: '80%',
    marginTop: 40,
    alignSelf: 'center',
  },
  nhap: {
    fontSize: 12,
    color: "#EA5C2B",
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
  eye: {
    flex: 1,
    top: 7,
    left: 5
  },
  input: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 20,
    height: 39,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B9B9B9',
  },
  send: {
    ...TEXT,
    height: 35,
    borderRadius: 12,
    color: '#fff',
    backgroundColor: "#EA5C2B",
    paddingTop: 7,
    width: '80%',
    alignSelf: 'center',
  },
});
export default DoiMatKhau;
