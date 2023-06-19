import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../../component/Header";
import BottomTab from "../../component/BottomTab";
import VoucherItem from "../../component/VoucherDetail/VoucherItem";

export default function Voucher() {
  return (
    <SafeAreaView style={{flex:1}}>
        <Header />
        <VoucherItem />
    </SafeAreaView>
  );
}
