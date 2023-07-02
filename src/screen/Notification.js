import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import BottomTab from "../component/BottomTab";
import EachNoti from "../component/NotiComponent/EachNoti";

export default function Notification(){
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <EachNoti />
            </ScrollView>
        </SafeAreaView>
    );
}
