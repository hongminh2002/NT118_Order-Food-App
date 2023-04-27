import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

const orders = [
    {
        image: require("../../asset/FoodImage/cheese-burger-deluxe.png"),
        foodname: 'Burger bò phô-mai đặc biệt x2',
        total: '110,000',
        time: '15:45',
        date: '31/3/2023',
    },
    {
        image: require("../../asset/FoodImage/mcspicy-deluxe.png"),
        foodname: 'Burger phi lê gà cay đặc biệt',
        total: '101,000',
        time: '14:00',
        date: '31/3/2023',
    },
]

const UserInformation = () => {

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View >
            {orders.map((order, index) => (
                <View key={index} style={styles.infobox}>
                    <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 10, alignItems: 'center', justifyContent: 'space-between', }}>
                        <Image source={order.image} style={styles.img} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: 200, }}>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 14, }}>{order.foodname}</Text>
                            <Text style={{ fontFamily: "Roboto-Regular", fontSize: 13, }}>{order.time} - {order.date}</Text>
                        </View>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 13, }}>{order.total} VNĐ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10, }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14, color: '#EA5C2B', }}>Đặt lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14, color: '#EA5C2B', }}>Đánh giá</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.horizontalline}></View>
                </View>
            ))}
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    infobox: {
        width: deviceWidth,
        backgroundColor: 'white',
        paddingTop: 10,
    },

    img: {
        width: 75,
        height: 60,

    },

    button: {
        backgroundColor: '#rgba(255, 127, 63, 0.25)',
        borderRadius: 12,
        width: 100,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    horizontalline: {
        height: 1,
        width: deviceWidth,
        backgroundColor: '#D9D9D9',
        marginTop: 10,

    },
});

export default UserInformation;