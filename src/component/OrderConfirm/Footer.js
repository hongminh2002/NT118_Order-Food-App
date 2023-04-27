import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";

const Footer = () => {
    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../asset/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../asset/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../asset/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.footerbox}>
            <View style={{ flexDirection: 'column', paddingLeft: 10, }}>
                <Text style={{color: '#FFFFFF', fontFamily: 'Roboto-Regular', fontSize: 14,}}>Giao hàng - 2 sản phẩm</Text>
                <Text style={{color: '#FFFFFF', fontFamily: 'Roboto-Medium', fontSize: 14,}}>110,000 VNĐ</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color: '#FF7F3F', fontFamily: 'Roboto-Medium', fontSize: 14, }}>Đặt hàng</Text>
            </TouchableOpacity>
        </View>
    )
};

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