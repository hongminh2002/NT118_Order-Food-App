import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import { auth, db, collection, addDoc, getDocs, updateDoc, doc, setDoc, getDoc } from '../../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Address = ({ navigation }) => {
  const [addressList, setAddressList] = useState([])
  const isFocused = useIsFocused();
  const [selectedAddress, setSelectedAddress] = useState('');

  let myUserId;

  useEffect(() => {
    getAddress();
  }, [isFocused])
  const getAddress = async () => {
    myUserId = auth.currentUser.uid;
    const docRef = await getDoc(doc(db, 'users', `${myUserId}`));
    const addressId = await AsyncStorage.getItem('ADDRESS');
    let tempDart = [];
    tempDart = docRef.data().address;
    tempDart.map(item => {
      if (item.addressId === addressId) {
        item.selected = true;
      }
      else {
        item.selected = false;
      }
    })
    setAddressList(tempDart);
  }

  const saveDefaultAddress = async item => {
    await AsyncStorage.setItem('ADDRESS', item.addressId);
    let tempDart = [];
    tempDart = addressList;
    tempDart.map(itm => {
      if (itm.addressId === item.addressId) {
        item.selected = true;
      }
      else {
        item.selected = false;
      }
    });

    let temp = [];
    tempDart.map(item => {
      temp.push(item);
    });
    setAddressList(temp);
    getAddress();
  }

  return (
    <View style={{ backgroundColor: '#D9D9D9', flex: 1, paddingTop: 20 }} >
      <FlatList
        data={addressList}
        renderItem={({ item, index }) => {
          return (
            <View style={[styles.addressItem, { marginBottom: index == addressList.length - 1 ? 80 : 15 }]}>
              <View>
                <Text>{item.street}</Text>
                <Text>{item.city}</Text>
                <Text>{item.receiver} {item.mobile}</Text>
              </View>
              {item.selected == true ? (
                <Ionicons
                    name="checkbox"
                    style={{
                      fontSize: 25,
                      color: "#000",
                      marginHorizontal: 5,
                    }}
                  />
              ) : (
                <TouchableOpacity onPress={() => {
                  saveDefaultAddress(item);
                }}>
                  <Ionicons
                    name="square-outline"
                    style={{
                      fontSize: 25,
                      color: "#000",
                      marginHorizontal: 5,
                    }}
                  />
                </TouchableOpacity>
              )}

            </View>
          )
        }}
      />
      <TouchableOpacity style={styles.addNewBtn} onPress={() => navigation.navigate('AddAddress')} >
        <Ionicons
          name="add"
          style={{
            fontSize: 25,
            color: "#000",
            marginHorizontal: 5,
          }}
        />
        <Text style={styles.btnText}>Thêm địa chỉ mới</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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

  addressItem: {
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center',
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },

  btnText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Address;