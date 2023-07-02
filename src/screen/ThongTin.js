import React, { useEffect, useState, Component, useContext } from 'react';

import { Modal, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { collection, getDoc } from "firebase/firestore";
import { auth, updateDoc, db, doc } from "../../firebase";
import moment from 'moment';



const ThongTin = () => {
  const navigation = useNavigation();
  const user = auth.currentUser;
  const [userData, setUserData] = useState("");
  const [open, setOpen] = useState("");
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() - 20), 'DD/MM/YYYY')

  const [selectedStartDate, setSelectedStartDate] = useState("");

  const [startedDate, setStartedDate] = useState("12/12/2023");


  const formattedStartDate = moment(selectedStartDate, 'YYYY/MM/DD').format('DD/MM/YYYY');

  const getUser = async () => {

    if (user) {
      const myUserUid = auth.currentUser.uid;
      const docRef = doc(db, "users", `${myUserUid}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const userData = docSnap.data();
        setUserData(userData);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } else {
      alert("Không có tài khoản!");
    }
  }

  const handleDatePress = () => {
    setOpen(!open);
  }

  const handleDateChange = (propDate) => {
    setStartedDate(propDate);
    userData.birthday = moment(propDate, 'YYYY/MM/DD').format('DD/MM/YYYY');
  }

  const handleUpdate = async () => {
    const myUserUid = auth.currentUser.uid;

    const docRef = doc(db, "users", `${myUserUid}`);
    await updateDoc(docRef, {
      name: userData.name,
      phone: userData.phone,
      birthday: formattedStartDate,
    });
  }

  useEffect(() => {
    getUser();
  }, []);


  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../asset/Nền1.png')} style={style.background1} />
      <Image source={require('../asset/Nền3.png')} style={style.background2} />
      <View style={{ height: 51, flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          <FontAwesome onPress={() => navigation.navigate('Account')} name="user-circle-o" size={40} color="white" style={{
            left: 20,
          }} />
        </View>
        <View style={{ flex: 7, justifyContent: "space-between" }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", paddingTop: 7 }}>{userData.name}</Text>
        </View>
        <View style={{ flex: 1, paddingTop: 7 }}>
          <AntDesign onPress={() => navigation.goBack()} name="close" size={24} color="white" />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ height: 450 }}>
          <View style={{ height: 70 }}>
            <View style={{ height: 35, paddingTop: 8, paddingLeft: 33 }}>
              <Text style={style.nhap}>Tên người dùng :</Text>
            </View>
            <View style={{ width: 180, borderWidth: 0.5, borderColor: "#B9B9B9" }}></View>
            <View style={{ height: 35, paddingTop: 10, paddingLeft: 33, flexDirection: 'row' }}>
              <TextInput
                value={userData ? userData.name : ''}
                onChangeText={(text) => setUserData({ ...userData, name: text })}
                style={style.text}
                placeholder={userData.name}
              />
              <MaterialIcons name="edit" size={15} color="black" style={{ flex: 1 }} />
            </View>
            <View style={{ width: 400, borderWidth: 1, borderColor: "#B9B9B9" }}></View>
          </View>
          <View style={{ height: 70 }}>
            <View style={{ height: 35, paddingTop: 8, paddingLeft: 33 }}>
              <Text style={style.nhap}>Ngày sinh :</Text>
            </View>
            <View style={{ width: 180, borderWidth: 0.5, borderColor: "#B9B9B9" }}></View>
            <View style={{ height: 35, paddingTop: 10, paddingLeft: 33, flexDirection: 'row' }}>
              <TextInput value={userData.birthday} style={style.text} />
              <Modal animationType='slide'
                transparent={true}
                visible={open}>
                <View style={style.centeredView}>
                  <View style={style.modalView}>
                    <DatePicker
                      mode='calendar'
                      visible={open}
                      selected={startedDate}
                      minimumDate="01/01/1900"
                      onDateChange={handleDateChange}
                      onSelectedChange={date => setSelectedStartDate(date)}
                      style={{ borderRadius: 12 }}
                    />
                    <TouchableOpacity>
                      <Text style={{ color: 'white', paddingTop: 10, fontSize: 15, fontWeight: 'bold' }} onPress={handleDatePress}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity style={{ flex: 1 }} >
                <MaterialIcons onPress={handleDatePress} name="calendar-today" size={15} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ width: 400, borderWidth: 1, borderColor: "#B9B9B9" }}></View>
          </View>
          <View style={{ height: 70 }}>
            <View style={{ height: 35, paddingTop: 8, paddingLeft: 33 }}>
              <Text style={style.nhap}>Số điện thoại :</Text>
            </View>
            <View style={{ width: 180, borderWidth: 0.5, borderColor: "#B9B9B9" }}></View>
            <View style={{ height: 35, paddingTop: 10, paddingLeft: 33, flexDirection: 'row' }}>
              <TextInput
                value={userData ? userData.phone : ''}
                onChangeText={(text) => setUserData({ ...userData, phone: text })}
                style={style.text}
                placeholder={userData.phone}
              />
              <MaterialIcons name="edit" size={15} color="black" style={{ flex: 1 }} />
            </View>
            <View style={{ width: 400, borderWidth: 1, borderColor: "#B9B9B9" }}></View>
          </View>
          <View style={{ height: 70 }}>
            <View style={{ height: 35, paddingTop: 8, paddingLeft: 33 }}>
              <Text style={style.nhap}>Email :</Text>
            </View>
            <View style={{ width: 180, borderWidth: 0.5, borderColor: "#B9B9B9" }}></View>
            <View style={{ height: 35, paddingTop: 10, paddingLeft: 33, flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, flex: 9, color: 'gray' }}>{userData.email}</Text>
            </View>
            <View style={{ width: 400, borderWidth: 1, borderColor: "#B9B9B9" }}></View>
          </View>

        </View>
        <View>
          <TouchableOpacity onPress={handleUpdate} >
            <Text style={style.save}>Lưu thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={style.name}>
        <AntDesign name="close" size={24} color="white" style={{
          position:'absolute',
          top: 28,
          left: 345,
        }}/>
        <FontAwesome name="user-circle-o" size={40} color="white" style={{
          position:'absolute',
          top: 18,
          left: 19,
        }}/>
        <Text style={style.pageName}>Nguyễn Văn A</Text>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Tên người dùng:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={{height:70}}>Nguyễn Văn A</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Ngày sinh:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={style.content}>00/00/0000</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Số điện thoại:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={style.content}>038xxxxxxx</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Email:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={style.content}>name@gmail.com</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Địa chỉ:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={style.content}>30/4 Cách mạng tháng 8</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
      </View>
      <View>
        <TouchableOpacity >
          <Text style={style.save}>Lưu thay đổi</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>

  );
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
    top: 75,
    width: '100%',
  },
  nhap: {
    fontSize: 15,
    color: "#EA5C2B"
  },
  text: {
    fontSize: 16,
    flex: 9,
  },
  save: {
    height: 35,
    borderRadius: 12,
    paddingTop: 7,
    width: '80%',
    color: "#fff",
    backgroundColor: "#EA5C2B",
    alignSelf: 'center',
    textAlign: "center",
  },

  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#EA5C2B",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  }
});
export default ThongTin;
