import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

const users = [
    {
        name: 'Phan Thanh Bách',
        phone: '0772471714',
        address: 'Trường Đại học Công nghệ Thông tin, Khu phố 6, Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
    },
]

const UserInformation = () => {

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../asset/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../asset/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../asset/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.infobox}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5, }}>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, }}>Địa chỉ</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#EA5C2B' }}>Thay đổi</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 13, color: '#7A7A7A' }}>{users[0].address}</Text>
            <View style={{ flexDirection: 'row', paddingTop: 3, }}>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 13, }}>{users[0].name}</Text>
                <View style={styles.verticalline}></View>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 13, }}>{users[0].phone}</Text>
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