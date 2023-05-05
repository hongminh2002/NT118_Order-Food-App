import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../component/Header";
import BottomTab from "../component/BottomTab";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  return (
    <SafeAreaView>
      <Header />
      <BottomTab />
    </SafeAreaView>
  );
}