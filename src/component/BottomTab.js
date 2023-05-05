import { color } from "@rneui/base";
import React from "react";
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTab(){
    return (
        <View 
        style = {{
            height:60,
            backgroundColor:'white',
            flexDirection:'row',
            justifyContent:'space-around',
            position:'absolute',
            top:632,
            left:0,
            right:0,
            borderTopColor:'#D9D9D9', 
            borderTopWidth:1
        }}
        >
            <Icon icon='home' text="Trang chủ"/>
            <Icon icon='hamburger' text='Đặt hàng' />
            <Icon icon='receipt' text='Ưu đãi' />
            <Icon icon='user' text="Cá nhân"/>
        </View>
    );
}

const Icon = (props) => (
    <View>
        <FontAwesome5
        name = {props.icon}
        size = {25}
        style = {{
            marginTop:5,
            marginBottom:3,
            alignSelf: "center",
            color:"#7A7A7A"
        }}
        />
        <Text>{props.text}</Text>
    </View>
);