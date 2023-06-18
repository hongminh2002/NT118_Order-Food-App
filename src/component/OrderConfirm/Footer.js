import { View, Text, TouchableOpacity, StyleSheet, Dimensions,} from 'react-native'
import React, {useState, useEffect, } from "react";
import { useFonts } from "expo-font";
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { auth, db, collection, addDoc, getDocs, updateDoc, doc, getDoc } from '../../../firebase'

const Footer = () => {
    const [cartList, setCartList] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    
    useEffect(() => {
        getCartItems();
    }, [isFocused]);
    
    const getCartItems = async () => {
        myUserId = auth.currentUser.uid;
        const docRef = await getDoc(doc(db, 'users', myUserId));
        setCartList(docRef.data().cart);
        //getCartItems();
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
                    {getTotal() + ' VNĐ'}
                </Text>
            </View>
            {/* <DatHangButton /> */}
            <TouchableOpacity
                onPress={() => navigation.navigate('OrderTracking')}
                style={{
                    width: windowWidth - 270,
                    height: '60%',
                    backgroundColor: 'white',
                    borderRadius: 12,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginRight: 20
                }}>
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
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        elevation: 5,
    },

});

export default Footer;