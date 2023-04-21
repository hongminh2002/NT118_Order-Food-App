import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={{
      flexDirection:"row", 
      justifyContent:'space-between',
      backgroundColor: "#EA5C2B"
      }}>
      <Image source={require('../asset/Logo.png')} />
      <View 
        style = {{
          width:"60%",
          backgroundColor:"white",
          borderRadius:12
        }}
      >
        <Image 
          source={require('../asset/Search.png')} 
          style={{
            marginLeft:200,
            marginTop:2}}
        />
      </View>
      <TouchableOpacity>
        <Image source={require('../asset/Cart.png')} />
      </TouchableOpacity>
    </View>    
  );
}

