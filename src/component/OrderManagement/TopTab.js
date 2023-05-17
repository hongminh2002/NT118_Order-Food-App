import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Ongoing from './Ongoing';
import Delivering from './Delivering';
import CompletedOrder from './CompletedOrder';
import Cancelled from './Cancelled';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import Waiting from './Waiting';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12, fontFamily: 'Roboto-Medium', textTransform: 'none', },
            tabBarItemStyle: {
                width: deviceWidth / 5,
                flex: 1,
                borderRadius: 10,
            },
            tabBarStyle: { justifyContent: 'center' },
            tabBarActiveTintColor: '#EA5C2B',
            tabBarInactiveTintColor: '#7A7A7A',
            tabBarAllowFontScaling: true,
            tabBarIndicatorStyle: {
                backgroundColor: '#rgba(255, 127, 63, 0.25)',
                height: 45,
                marginBottom: 5,
                borderRadius: 12
            }
        }}>
            <Tab.Screen name="Chờ xác nhận" component={Waiting} />
            <Tab.Screen name="Đang thực hiện" component={Ongoing} />
            <Tab.Screen name="Đang vận chuyển" component={Delivering} />
            <Tab.Screen name="Đã hoàn thành" component={CompletedOrder} />
            <Tab.Screen name="Đã hủy" component={Cancelled} />
        </Tab.Navigator>
    )
}

const deviceWidth = Math.round(Dimensions.get("window").width);

export default TopTab;