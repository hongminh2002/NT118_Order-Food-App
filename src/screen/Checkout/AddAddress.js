import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth, db, collection, addDoc, getDocs, updateDoc, doc, getDoc } from '../../../firebase';
import uuid from 'react-native-uuid';

const AddAddress = ({navigation}) => {
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [receiver, setReceiver] = useState('')
  const [mobile, setMobile] = useState('')

  const saveAddress = async () => {
    myUserId = auth.currentUser.uid;
    const addressId = uuid.v4();
    const docRef = await getDoc(doc(db, 'users', `${myUserId}`));
    let tempDart = [];
    tempDart = docRef.data().address;
    tempDart.push({ street, city, receiver, mobile, addressId })
    try {
      await updateDoc(doc(db, 'users', `${myUserId}`), {
        address: tempDart,
      });
      console.log('Successfully add');
      navigation.goBack();
    } catch (error) {
      console.log('Error adding address: ', error);
    }
  }
  return (
    <View style={{ flex: 1, }}>
      <View style={[styles.typeText, { flexDirection: 'row', }]}>
        <TextInput value={street}
          onChangeText={(text) => setStreet(text)}
          placeholder="Nhập địa chỉ" />
      </View>
      <View style={[styles.typeText, { flexDirection: 'row', }]}>
        <TextInput
          value={city}
          onChangeText={(text) => setCity(text)}
          placeholder='Nhập tên thành phố' />
      </View>
      <View style={[styles.typeText, { flexDirection: 'row', }]}>
        <Ionicons
          name="person"
          style={{
            fontSize: 25,
            color: "#000",
            marginTop: 12,
            paddingRight: 15,
          }}
        />
        <TextInput
          value={receiver}
          onChangeText={(text) => setReceiver(text)}
          placeholder='Nhập họ tên người nhận' />
      </View>
      <View style={[styles.typeText, { flexDirection: 'row', }]}>
        <Ionicons
          name="call"
          style={{
            fontSize: 25,
            color: "#000",
            marginTop: 12,
            paddingRight: 15,
          }}
        />
        <TextInput
          value={mobile}
          onChangeText={(text) => setMobile(text)}
          placeholder='Nhập số điện thoại người nhận'
          keyboardType='numeric' />
      </View>
      <TouchableOpacity style={styles.addNewBtn} onPress={() => saveAddress()}>
        <Ionicons
          name="add"
          style={{
            fontSize: 25,
            color: "#000",
            marginHorizontal: 5,
          }}
        />
        <Text style={styles.btnText}>Lưu địa chỉ mới</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddAddress;

const styles = StyleSheet.create({
  typeText: {
    fontSize: 12,
    //backgroundColor: '#fff',
    paddingLeft: 20,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 12,
    width: '90%',
  },
  addNewBtn: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#EA5C2B',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
  },
})