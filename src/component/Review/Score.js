import React from "react";
import { View, Image, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Score(){
    return(
        <View>
            <Text style={{fontSize:25, fontWeight:'bold', marginLeft:15, top:15}}>
                    Đánh giá
            </Text>
            <View style={{flexDirection:'row', top:25}}>
                <View style={{
                    marginLeft:15,
                    width:'30%',
                    borderRightWidth:'2',
                    borderRightColor:'#958B8B'
                }}>
                    <Text style={{fontSize:35, fontWeight:'700', alignSelf:'center'}}>4.0</Text>
                    <Image source={require('../../asset/RatingBar.png')} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:17, top:5, alignSelf:'center'}}>
                        3 đánh giá
                    </Text>
                </View>
                <Image source={require('../../asset/5Rating.png')} style={{left:25}} />
            </View>   
        </View>
    );
}