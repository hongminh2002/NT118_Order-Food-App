import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../component/Header";
import BottomTab from "../component/BottomTab";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#EA5C2B", padding: 15 }}>
        <Header />
      </View>
      <Image 
        source={require("../asset/Burger1.png")} 
        style={{
          marginTop:50
        }}
      />
      <BottomTab />
    </SafeAreaView>
  );
}
