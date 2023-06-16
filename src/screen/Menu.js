import React from "react";
import { StatusBar } from 'expo-status-bar';
//import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../component/Menu/Header';
import Categories from '../component/Menu/Categories';
import { Divider } from "react-native-elements";

const Menu = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar style='dark' />
            <View style={{flex:1}}>
                <Categories />
            </View>
            <Divider width={1} />
        </View>
    );
};

export default Menu;