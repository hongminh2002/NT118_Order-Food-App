import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../../component/Header";
import BottomTab from "../../component/BottomTab";
import CartItem from "../../component/CartDetail/CartItem";
import CheckOut from "../../component/CartDetail/CheckOut";

export default function Cart() {
  return (
    <SafeAreaView style={{flex:1}}>
        <Header />
        <CartItem />
        <CheckOut />
        <BottomTab />
    </SafeAreaView>
  );
}
