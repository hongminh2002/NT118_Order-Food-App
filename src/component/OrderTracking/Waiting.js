import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from "expo-font";
import { auth, app, db, collection, addDoc, getDocs, updateDoc, doc, getDoc } from '../../../firebase'

// const orders = [
//     {
//         image: require("../../assets/FoodImages/cheese-burger-deluxe.png"),
//         foodname: 'Burger bò phô-mai đặc biệt x2',
//         total: '110,000',
//         time: '15:45',
//         date: '31/3/2023',
//     },
//     {
//         image: require("../../assets/FoodImages/mcspicy-deluxe.png"),
//         foodname: 'Burger phi lê gà cay đặc biệt',
//         total: '101,000',
//         time: '14:00',
//         date: '31/3/2023',
//     },
// ]

let myUserId = '';

const Waiting = () => {
    const [orderList, setOrderList] = useState([]);
    //const isFocused = useIsFocused();

    const filteredOrders = orderList?.filter(eachOrder => eachOrder.orderStatus == 'Chờ xác nhận')

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async () => {
        myUserId = auth.currentUser.uid;
        const docRef = await getDoc(doc(db, 'users', myUserId));
        console.log(docRef.data().orders);
        setOrderList(docRef.data().orders);
    }

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

    const renderItems = (item, index) => {
        return (
            <View key={index} style={styles.infobox}>
                <FlatList
                    data={item.items}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 10, alignItems: 'center', justifyContent: 'space-between', }}>
                                <Image source={{ uri: item.image }} style={styles.img} />
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: 200, }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: 14, }}>{item.name}</Text>
                                </View>
                                <Text style={{ fontFamily: "Roboto-Regular", fontSize: 13, }}>Số lượng: {item.qty}</Text>
                            </View>
                        )
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5, }}>
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14, }}>{item.orderTime + ' - ' + item.orderDate}</Text>
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14, }}>{'Tổng: ' + VND.format(item.orderTotal)}</Text>
                </View>
                <View style={styles.horizontalline}></View>
            </View>
        )
    }

    return (
        <View>
            {filteredOrders && filteredOrders.length > 0 ? (
                <FlatList
                    data={filteredOrders}
                    //keyExtractor={({ item, index }) => index}
                    renderItem={({ item, index }) => renderItems(item, index)}
                />
            ) : (
                <View style={{ alignSelf: 'center', marginHorizontal: 30, paddingTop: 10 }}>
                    <Text>
                        Không có đơn hàng đang chờ xác nhận.
                    </Text>
                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <Text>
                            Đặt ngay!
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            {/* {orders.map((order, index) => (
                <View key={index} style={styles.infobox}>
                    <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 10, alignItems: 'center', justifyContent: 'space-between', }}>
                        <Image source={order.image} style={styles.img} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: 200, }}>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 14, }}>{order.foodname}</Text>
                            <Text style={{ fontFamily: "Roboto-Regular", fontSize: 13, }}>{order.time} - {order.date}</Text>
                        </View>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 13, }}>{order.total} VNĐ</Text>
                    </View>
                    <View style={styles.horizontalline}></View>
                </View>
            ))} */}
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
        height: 3,
        width: deviceWidth,
        backgroundColor: '#D9D9D9',
        marginTop: 15,
    },
});

export default Waiting;