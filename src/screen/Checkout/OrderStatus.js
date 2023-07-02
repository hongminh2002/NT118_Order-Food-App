import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

import { auth, db, collection, addDoc, getDocs, updateDoc, doc, getDoc } from '../../../firebase'

const OrderStatus = ({ navigation }) => {
    const route = useRoute();
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes();

    useEffect(() => {
        if (route.params.status == 'success') {
            placeOrder();
        }
    }, []);

    const placeOrder = async () => {
        let tempOrders = [];
        myUserId = auth.currentUser.uid;
        const docRef = await getDoc(doc(db, 'users', `${myUserId}`));
        tempOrders = docRef.data().orders;
        tempOrders.push({
            userId: route.params.userId,
            userEmail: route.params.email,
            items: route.params.cartList,
            address: route.params.address,
            receiver: route.params.name,
            receiverMobile: route.params.mobile,
            orderTotal: route.params.total,
            paymentStatus: route.params.paymentStatus,
            orderStatus: 'Chờ xác nhận',
            orderDate: date,
            orderTime: time,
        });
        await updateDoc(doc(db, 'users', `${myUserId}`), {
            cart: [],
            orders: tempOrders,
        });
        await addDoc(collection(db, 'orders'), {
            data: {
                userId: route.params.userId,
                userEmail: route.params.email,
                items: route.params.cartList,
                address: route.params.address,
                receiver: route.params.name,
                receiverMobile: route.params.mobile,
                orderTotal: route.params.total,
                paymentStatus: route.params.paymentStatus,
            },
            orderBy: route.params.userId,
            orderStatus: 'Chờ xác nhận',
        });
    }

    return (
        <View style={styles.container}>
            <Image
                source={
                    route.params.status == 'success'
                        ? require('../../asset/icons/success.gif')
                        : require('../../asset/icons/fail.gif')
                }
                style={styles.icon}
            />
            <Text style={styles.resultText}>
                {route.params.status == 'success'
                    ? 'Đơn hàng đang được xử lý !!'
                    : 'Đặt hàng thất bại !!'}
            </Text>
            <TouchableOpacity
                style={styles.backToHome}
                onPress={() => {
                    navigation.navigate('Menu');
                }}>
                <Text>Quay lại thực đơn</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backToHome: {
        width: '50%',
        height: 50,
        borderWidth: 0.5,
        marginTop: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '70%',
        height: '30%',
        alignSelf: 'center',
    },
    resultText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginTop: -20,
    },
})

export default OrderStatus;