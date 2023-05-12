import React from "react";
import { View, Image, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ReviewOverall(){
    return(
        <View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                height:windowHeight-600,
                backgroundColor:'white',
                borderBottomColor:'#989292',
                borderBottomWidth:1.5
            }}>
                <Image 
                    source={require('../../asset/Back.png')} 
                    style={{marginLeft:15}} />
                <Text style={{
                    fontSize:25, 
                    fontWeight:'bold',
                    marginLeft:30, 
                    width:windowWidth-10}}>
                    3 miếng gà rán
                </Text>
            </View>
        </View>
    );
}