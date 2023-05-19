import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserInformation from '../component/OrderConfirm/UserInformation';
import OrderDetail from '../component/OrderConfirm/OrderDetail';
import Footer from '../component/OrderConfirm/Footer';
import { Divider } from 'react-native-elements';

const OrderConfirm = () => {
    return (
        <View style={{ backgroundColor: '#D9D9D9', flex: 1 }}>
            <StatusBar style='auto' />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginVertical: 15 }}>
                <UserInformation />
            </View>
            <View style={{ marginBottom: 15 }}>
                <OrderDetail />
            </View>
            </ScrollView>
            <Divider width={1} />
            <Footer />
        </View>
    );
};

export default OrderConfirm;