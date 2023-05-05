import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Header from "../component/Header";
import BottomTab from "../component/BottomTab";
import CartItem from "../component/CartDetail/CartItem";
import CheckOut from "../component/CartDetail/CheckOut";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  return (
    <SafeAreaView>
        <Header />
        <CartItem />
        <CheckOut />
        <BottomTab />
    </SafeAreaView>
  );
}
