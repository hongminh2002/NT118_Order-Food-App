import { View, Text, ScrollView, } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../component/OrderHistory/Title';
import CompletedOrder from '../component/OrderHistory/CompletedOrder';


const OrderConfirm = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#D9D9D9', flex: 1 }}>
            <StatusBar style='auto' />
            <View style={{ marginBottom: 5 }}>
                <Title />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ height: '100%', backgroundColor: '#FFFFFF'}}>
                <CompletedOrder />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default OrderConfirm;