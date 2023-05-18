import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../component/OrderHistory/Title';
import CompletedOrder from '../component/OrderHistory/CompletedOrder';


const OrderConfirm = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>
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

const deviceHeight = Math.round(Dimensions.get("window").height);

export default OrderConfirm;