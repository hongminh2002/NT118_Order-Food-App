import React, {useState, useEffect} from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet, Dimensions } from "react-native";
import CartData, { foods } from './CartData'

const CartItem = () => {

  const renderItems = (data, index) => {
      return (
          <View key={index} style={{ paddingBottom: 15 }}>
              <View style={styles.foodcard}>
                  <View style={{width:80, height:80}}>
                      <Image source={data.image} style={styles.foodimage} />
                  </View>
                  <View style={styles.foodinfo}>
                      <Text style={{ fontSize: 15 }}>
                          {data.title}
                      </Text>
                      <Text style={{ fontSize: 15, fontWeight:'600' }}>
                          {data.price} 
                      </Text>
                  </View>
                  <View style={{flexDirection:'row', alignSelf:'center', flex:1, justifyContent:'flex-end', marginRight:10}}>
                    <TouchableOpacity>
                      <Image source={require('../../asset/VectorMinus.png')} style={{marginRight:5}}/>
                    </TouchableOpacity>
                    <Text style={{fontWeight:600, fontSize:17, bottom:5, marginRight:5}}>{data.quantity}</Text>
                    <TouchableOpacity>
                      <Image source={require('../../asset/VectorPlusMini.png')} style={{marginRight:5}} />
                    </TouchableOpacity>
                  </View>
              </View>
          </View>
      )
  }

  return (
      <ScrollView>
          {
              foods.map(renderItems)
          }
      </ScrollView>
  )
}

export default CartItem

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    foodcard: {
        flexDirection: "row",
        width: deviceWidth - 40,
        height: 90,
        top:10,
        backgroundColor: "#fff",
        alignSelf:'center',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 5,
    },

    foodinfo: {
        justifyContent:'center',
        width: '50%',
        marginLeft:15
    },

    foodimage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
})
