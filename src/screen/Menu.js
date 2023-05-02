import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../component/Header';
import Categories from '../component/Menu/Categories';
import BottomTab from '../component/BottomTab';
import { Divider } from "react-native-elements";

const Menu = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <StatusBar style='dark' />
                <Header />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
            </ScrollView>
            <Divider width={1} />
            <BottomTab />
        </SafeAreaView>
    );
};

export default Menu;