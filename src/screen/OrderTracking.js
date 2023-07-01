import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ongoing from '../component/OrderTracking/Ongoing';
import Delivering from '../component/OrderTracking/Delivering';
import CompletedOrder from '../component/OrderTracking/CompletedOrder';
import Cancelled from '../component/OrderTracking/Cancelled';
import Waiting from '../component/OrderTracking/Waiting';
import { useFonts } from "expo-font";

const Tab = createMaterialTopTabNavigator();

const OrderTracking = () => {
    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../asset/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../asset/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../asset/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
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

export default OrderTracking;