import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../component/Header";
import VoucherDes from "../../component/VoucherDetail/VoucherDes";
import ApDungBigButton from "../../component/VoucherDetail/ApDungBigButton";

export default function VoucherDescription(){
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <VoucherDes />
            </ScrollView>
            <ApDungBigButton />
        </SafeAreaView>
    );
}
