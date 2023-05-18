import * as React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import FoodDetail from "./src/screen/FoodDetail";
import Home from "./src/screen/Home";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from "./src/component/Header";
import BottomTab from "./src/component/BottomTab";
import { StatusBar } from "expo-status-bar";
import Sort from "./src/screen/Sort";
import SortReview from "./src/component/Sort/SortReview";
import SortMoney from "./src/component/Sort/SortMoney";
import DetailReview from "./src/component/FoodDetail/DetailReview";
import DangKy from "./src/screen/DangKy";
import DangNhap from "./src/screen/DangNhap";
import QuenMatKhau from "./src/screen/QuenMatKhau";
import ThongTin from "./src/screen/ThongTin";


const Stack = createStackNavigator();


export default function App() {
  return (
    <BottomTab/>

  );
}


