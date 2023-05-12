import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../component/Header";
import VoucherDes from "../../component/VoucherDetail/VoucherDes";
import ApplyVoucher from '../../component/VoucherDetail/ApplyVoucher';

export default function ChooseSuccessfully(){
    return(
        <SafeAreaView style={{flex:1}}>
            <Header />
            <ScrollView>
                <VoucherDes />
            </ScrollView>
            <ApplyVoucher />
        </SafeAreaView>
    );
}
