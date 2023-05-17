import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import TopTab from '../component/OrderManagement/TopTab';
import Title from '../component/OrderConfirm/Title';


const OrderManagement = () => {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <View style={{ marginBottom: 1 }}>
                    <Title />
                </View>
                <TopTab />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default OrderManagement;