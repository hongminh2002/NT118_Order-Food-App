import { View, Text, TouchableOpacity, StyleSheet, Dimensions, } from 'react-native'
import React, { useState, useEffect, } from "react";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { auth, db, collection, addDoc, getDocs, updateDoc, doc, getDoc } from '../../../firebase'

let myUserId = '';
let email = '';

const Footer = () => {
    const [selectedAddress, setSelectedAddress] = useState('Chọn một địa chỉ');
    const [selectedReceiver, setSelectedReceiver] = useState('');
    const [selectedMobile, setSelectedMobile] = useState('');
    const [cartList, setCartList] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        getCartItems();
        getAddress();
        getEmail();
    }, [isFocused]);

    const getAddress = async () => {
        myUserId = auth.currentUser.uid;
        const docRef = await getDoc(doc(db, 'users', `${myUserId}`));
        const addressId = await AsyncStorage.getItem('ADDRESS');
        let tempDart = [];
        tempDart = docRef.data().address;
        tempDart.map(item => {
            if (item.addressId === addressId) {
                setSelectedAddress(item.street + ", " + item.city);
                setSelectedReceiver(item.receiver);
                setSelectedMobile(item.mobile);
            }
        })
    }

    const getCartItems = async () => {
        myUserId = auth.currentUser.uid;
        const docRef = await getDoc(doc(db, 'users', myUserId));
        setCartList(docRef.data().cart);
        //getCartItems();
    };

    const getEmail = async () => {
        myUserId = auth.currentUser.uid;
        const docRef = await getDoc(doc(db, 'users', myUserId));
        email = docRef.data().email;
    };

    const getTotal = () => {
        let total = 0;
        cartList.map(item => {
            total += item.price * item.qty;
        });
        console.log(total);
        return total;
    };

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../asset/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../asset/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../asset/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <View style={{
            height: '12%',
            width: windowWidth,
            //borderRadius:12,
            backgroundColor: '#EA5C2B',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
        }}>
            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: "bold" }}>
                    Tổng thanh toán
                </Text>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
                    {VND.format(getTotal())}
                </Text>
            </View>
            {/* <DatHangButton /> */}
            <TouchableOpacity
                disabled={selectedAddress == 'Chọn một địa chỉ' ? true : false}
                onPress={() => {
                    if (selectedAddress !== 'Chọn một địa chỉ') {
                        navigation.navigate('OrderStatus', {
                            status: 'success',
                            cartList: cartList,
                            total: getTotal(),
                            address: selectedAddress,
                            userId: myUserId,
                            name: selectedReceiver,
                            mobile: selectedMobile,
                            email: email,
                            paymentStatus: 0,
                            });
                    }
                }}
                style={[styles.button, { backgroundColor: selectedAddress == 'Chọn một địa chỉ' ? '#838383' : 'white' }]}>
                <Text style={{
                    color: '#FF7F3F',
                    fontWeight: 'bold',
                    fontSize: 16,
                    alignSelf: 'center'
                }}>
                    {'Đặt hàng (' + cartList.length + ')'}
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    footerbox: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#EA5C2B',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },

    button: {
        width: windowWidth - 270,
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 12,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: 20
    },

});

export default Footer;