import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Header from "../component/Header";
import BottomTab from "../component/BottomTab";
import VoucherItem from "../component/VoucherDetail/VoucherItem";
import ApplyVoucher from "../component/VoucherDetail/ApplyVoucher";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Voucher() {
  return (
    <SafeAreaView>
        <Header />
        <VoucherItem />
        <BottomTab />
    </SafeAreaView>
  );
}
