import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OrderTracking from './src/component/OrderTracking/TopTab';
import Home from './src/screen/Home';
import SortReview from "./src/component/Sort/SortReview";
import SortMoney from "./src/component/Sort/SortMoney";
import FoodDetail1 from "./src/component/Menu/FoodDetail1";
import FoodDetail from "./src/screen/FoodDetail";
import DetailReview from "./src/component/FoodDetail/DetailReview";
import Sort from "./src/screen/Sort";
import Menu from './src/screen/Menu';
import Categories from './src/component/Menu/Categories';


const HomeNavigator = () => {
    const Stack = createStackNavigator();
    console.log(Stack);
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Trang chủ' screenOptions={{ headerShown: false, }}>
                    <Stack.Screen name="Trang chủ" component={Home} />
                    <Stack.Screen name="Sort" component={Sort} />
                    <Stack.Screen name="SortReview" component={SortReview} />
                    <Stack.Screen name="SortMoney" component={SortMoney} />
                    <Stack.Screen name="FoodDetail" component={FoodDetail} />
                    <Stack.Screen name="DetailReview" component={DetailReview} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MenuNavigator = () => {
    const Stack = createStackNavigator();
    console.log(Stack);
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Thực đơn' screenOptions={{ headerShown: false, }}>
                    <Stack.Screen name="Thực đơn" component={Menu} />
                    <Stack.Screen name="Danh mục" component={Categories} />
                    <Stack.Screen name="Chi tiết sản phẩm" component={FoodDetail1} />
                    <Stack.Screen name="Lọc" component={Sort} />
                    <Stack.Screen name="Giá tiền" component={SortMoney} />
                    <Stack.Screen name="Theo dõi đơn hàng" component={OrderTracking} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { HomeNavigator, MenuNavigator };