import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../component/Header";
import BottomTab from "../component/BottomTab";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Voucher() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#EA5C2B", padding: 15 }}>
        <Header />
      </View>
      <BottomTab />
    </SafeAreaView>
  );
}
