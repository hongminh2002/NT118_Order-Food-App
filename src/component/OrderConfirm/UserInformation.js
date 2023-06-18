import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from "expo-font";
import { auth, db, collection, addDoc, getDocs, updateDoc, doc, setDoc, getDoc } from '../../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

// const users = [
//     {
//         name: 'Phan Thanh Bách',
//         phone: '0772471714',
//         address: 'Trường Đại học Công nghệ Thông tin, Khu phố 6, Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
//     },
// ]

const UserInformation = ({ navigation }) => {
    const [selectedAddress, setSelectedAddress] = useState('Chọn một địa chỉ');
    const [selectedReceiver, setSelectedReceiver] = useState('');
    const [selectedMobile, setSelectedMobile] = useState('');
    const isFocused = useIsFocused();
    
    useEffect(() => {
        getAddress();
    },[isFocused])

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

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../asset/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../asset/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../asset/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.infobox}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5, }}>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 15, }}>Địa chỉ</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Address')}>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#EA5C2B' }}>Thay đổi</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#7A7A7A' }}>{selectedAddress}</Text>
            <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>{selectedReceiver}</Text>
                <View style={styles.verticalline}></View>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>{selectedMobile}</Text>
            </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    infobox: {
        width: deviceWidth,
        backgroundColor: 'white',
        elevation: 1,
        padding: 10,
    },

    button: {
        backgroundColor: '#rgba(255, 127, 63, 0.25)',
        borderRadius: 12,
        width: 70,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    verticalline: {
        height: '100%',
        width: 1,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 10,
    },
});

export default UserInformation;