import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const foods = [
  {
    title : "Burger bò phô mai đặc biệt",
    price:"49,000 VNĐ",
    image : require('../../asset/BurgerBoDacBiet.png'),
    quantity:"2"
  },
  {
    title : "Burger 2 lớp bò phô mai",
    price:"65,000 VNĐ",
    image : require('../../asset/Burger2Lop.png'),
    quantity:"2"
  },
  {
    title : "3 miếng gà rán",
    price:"101,000 VNĐ",
    image : require('../../asset/3MiengGa.png'),
    quantity:"1"
  }
];

export default function CartItem() {
  return (
    <ScrollView showsVerticalScrollIndicator = {true}>
        {foods.map((food, index) => (
        <View 
            key={index} 
            style = {{
                width:"90%",
                height:81,
                backgroundColor:"white",
                borderRadius:12,
                borderBottomWidth:2,
                borderBottomColor:"#D9D9D9",
                marginTop:20,
                alignSelf:'center',
                flexDirection:'row',
                justifyContent:'space-between'
                }}>
            <FoodImage food={food} />
            <FoodInfo food={food} />
            <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Image source={require('../../asset/VectorMinus.png')} style={{marginRight:5}}/>
            <FoodQuantity food={food} />
            <Image source={require('../../asset/VectorPlusMini.png')} style={{marginRight:5}} />
            </View>
        </View>
        ))}
    </ScrollView>
    );
}

const FoodInfo = (props) => (
  <View style={{top:20}}>
    <Text style={{fontSize:15}}>{props.food.title}</Text>
    <Text style={{fontSize:15, fontWeight:'600'}}> {props.food.price} </Text>
  </View>
);

const FoodQuantity = (props) => (
  <Text style={{fontWeight:600, fontSize:17, bottom:5, marginRight:5}}>{props.food.quantity}</Text>
);

const FoodImage = (props) => (
  <Image source= {require('../../asset/BurgerBoDacBiet.png')} /> 
);
