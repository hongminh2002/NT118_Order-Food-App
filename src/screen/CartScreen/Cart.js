import React from "react";
import { SafeAreaView } from "react-native";
import CartItem from "../../component/CartDetail/CartItem";
import CheckOut from "../../component/CartDetail/CheckOut";

export default function Cart() {
  return (
    <View style={{flex:1}}>
        <CartItem />
        <CheckOut />
    </View>
  );
}
