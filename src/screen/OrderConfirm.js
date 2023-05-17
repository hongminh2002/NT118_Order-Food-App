import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../component/OrderConfirm/Title';
import UserInformation from '../component/OrderConfirm/UserInformation';
import OrderDetail from '../component/OrderConfirm/OrderDetail';
import Footer from '../component/OrderConfirm/Footer';
import { Divider } from 'react-native-elements';

const OrderConfirm = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#D9D9D9', flex: 1 }}>
            <StatusBar style='auto' />
            <View style={{ marginBottom: 15 }}>
                <Title />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginBottom: 15 }}>
                <UserInformation />
            </View>
            <View style={{ marginBottom: 15 }}>
                <OrderDetail />
            </View>
            </ScrollView>
            <Divider width={1} />
            <Footer />
        </SafeAreaView>
    );
};

export default OrderConfirm;