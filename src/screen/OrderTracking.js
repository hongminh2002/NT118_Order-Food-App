import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Title from '../component/OrderTracking/Title';
import TopTab from '../component/OrderTracking/TopTab';

const OrderTracking = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <TopTab />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default OrderTracking;