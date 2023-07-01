import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";

// const foodcart = [
//     {
//         foodname: "Burger bò phô-mai đặc biệt",
//         image: require("../../assets/FoodImages/cheese-burger-deluxe.png"),
//         price: "69,000",
//         quantity: 2,
//         total: "98,000",
//     },
//     {
//         foodname: "Burger phi lê gà cay đặc biệt",
//         image: require("../../assets/FoodImages/mcspicy-deluxe.png"),
//         price: "89,000",
//         quantity: 1,
//         total: "98,000",
//     },
// ];

const OrderDetail = ({ cartList }) => {

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../asset/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../asset/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../asset/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const renderItems = (item, index) => {
        return (
            <View style={{ flexDirection: 'row', paddingTop: 3, paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: 70, height: 70, }}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </View>
                <View style={{ justifyContent: 'flex-start', flexDirection: "column", alignItems: 'flex-start', width: '55%' }}>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>{item.name}</Text>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#7A7A7A' }}>{'Số lượng: ' + item.qty}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, }}>{VND.format(item.price)}</Text>
                </View>
            </View>
        )
    }

    const getTotal = () => {
        let total = 0;
        cartList.map(item => {
            total += item.price * item.qty;
        });
        return total;
    };

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <View>
            <View style={styles.infobox}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5, }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 15, }}>Sản phẩm đã chọn</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#EA5C2B' }}>+ Thêm</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={cartList}
                    renderItem={({ item, index }) => renderItems(item, index)}
                    showsVerticalScrollIndicator={false}
                />

                <View style={styles.horizontalline}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5, }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 15, }}>Freeship/khuyến mãi</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#EA5C2B' }}>Chọn</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.horizontalline}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5, }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 15, }}>Phương thức thanh toán</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: '#EA5C2B' }}>Chọn</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.infobox}>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 15, }}>Tổng cộng</Text>
                <View style={{ flexDirection: 'row', paddingLeft: 10, justifyContent: 'space-between', }}>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>Tạm tính</Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>{VND.format(getTotal())}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingLeft: 10, justifyContent: 'space-between', }}>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>Phí vận chuyển</Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>12.000 đ</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingLeft: 10, justifyContent: 'space-between', }}>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>Giảm giá</Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, }}>0 đ</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingLeft: 10, justifyContent: 'space-between', }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, }}>Số tiền thanh toán</Text>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, }}>110.000 đ</Text>
                </View>
            </View>
        </View>
    )
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    infobox: {
        width: deviceWidth,
        backgroundColor: 'white',
        elevation: 1,
        padding: 10,
        marginBottom: 15,
    },

    button: {
        backgroundColor: '#rgba(255, 127, 63, 0.25)',
        borderRadius: 12,
        width: 70,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    horizontalline: {
        height: 1,
        width: deviceWidth - 20,
        backgroundColor: '#D9D9D9',
        marginRight: 10,
        marginVertical: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default OrderDetail;