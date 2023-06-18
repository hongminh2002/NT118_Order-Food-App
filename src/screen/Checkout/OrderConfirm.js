import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
//import { SafeAreaView } from 'react-native-safe-area-context';
import UserInformation from '../../component/OrderConfirm/UserInformation';
import OrderDetail from '../../component/OrderConfirm/OrderDetail';
import Footer from '../../component/OrderConfirm/Footer';
import { Divider } from 'react-native-elements';
import { auth, db, collection, addDoc, getDocs, updateDoc, doc, getDoc } from '../../../firebase'
import { useIsFocused } from '@react-navigation/native';

// const users = [
//     {
//         name: 'Phan Thanh Bách',
//         phone: '0772471714',
//         address: 'Trường Đại học Công nghệ Thông tin, Khu phố 6, Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
//     },
// ]

let myUserId = '';

const OrderConfirm = ({ navigation }) => {
    const [cartList, setCartList] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        getCartItems();
    }, [isFocused]);
    const getCartItems = async () => {
        myUserId = auth.currentUser.uid;
        const docRef = await getDoc(doc(db, 'users', myUserId));
        setCartList(docRef.data().cart);
    };

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../asset/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../asset/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../asset/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ backgroundColor: '#D9D9D9', flex: 1 }}>
            <StatusBar style='auto' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginVertical: 15 }}>
                    <UserInformation navigation={navigation} />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <OrderDetail cartList={cartList} />
                </View>
            </ScrollView>
            <Divider width={1} />
            <Footer />
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

// const styles = StyleSheet.create({
//     infobox: {
//         width: deviceWidth,
//         backgroundColor: 'white',
//         elevation: 1,
//         padding: 10,
//     },

//     button: {
//         backgroundColor: '#rgba(255, 127, 63, 0.25)',
//         borderRadius: 12,
//         width: 70,
//         height: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     verticalline: {
//         height: '100%',
//         width: 1,
//         backgroundColor: '#D9D9D9',
//         marginHorizontal: 10,
//     },
// });

export default OrderConfirm;