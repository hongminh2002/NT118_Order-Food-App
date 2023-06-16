import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, FlatList, } from "react-native";
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { auth, app, db, getFirestore, collection, addDoc, getDocs, updateDoc, doc, getDoc } from '../../../firebase'

import CheckOut from "../../component/CartDetail/CheckOut";

let myUserId = '';

const Cart = () => {
  const isFocused = useIsFocused();
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getCartItems();
  }, [isFocused]);
  const getCartItems = async () => {
    myUserId = auth.currentUser.uid;
    const docRef = await getDoc(doc(db, 'users', myUserId));
    setCartList(docRef.data().cart);
  };
  const addItem = async item => {
    const docRef = await getDoc(doc(db, 'users', `${myUserId}`));
    let tempDart = [];
    tempDart = docRef.data().cart;
    tempDart.map((eachItem) => {
      if (eachItem.id == item.id) {
        eachItem.qty = eachItem.qty + 1;
      }
    });
    await updateDoc(doc(db, 'users', `${myUserId}`), {
      cart: tempDart,
    });
    getCartItems();
  }
  const removeItem = async item => {
    const docRef = await getDoc(doc(db, 'users', `${myUserId}`));
    let tempDart = [];
    tempDart = docRef.data().cart;
    tempDart.map((eachItem) => {
      if (eachItem.id == item.id) {
        eachItem.qty = eachItem.qty - 1;
      }
    });
    await updateDoc(doc(db, 'users', `${myUserId}`), {
      cart: tempDart,
    });
    getCartItems();
  }
  const deleteItem = async index => {
    const docRef = await getDoc(doc(db, 'users', `${myUserId}`));
    let tempDart = [];
    tempDart = docRef.data().cart;
    tempDart.splice(index, 1);
    await updateDoc(doc(db, 'users', `${myUserId}`), {
      cart: tempDart,
    });
    getCartItems();
  }
  const renderItems = (item, index) => {
    return (
      <View key={index} style={{ paddingBottom: 15 }}>
        <View style={styles.foodcard}>
          <View style={{ width: 80, height: 80, }}>
            <Image source={{ uri: item.image }} style={styles.foodimage} />
          </View>
          <View style={styles.foodinfo}>
            <Text style={{ fontSize: 15 }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '600' }}>
              {item.price}
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <TouchableOpacity onPress={() => {
                if (item.qty > 1) {
                  removeItem(item);
                } else {
                  deleteItem(index);
                }
              }}>
                <Image source={require('../../asset/VectorMinus.png')} />
              </TouchableOpacity>
              <Text style={{ fontWeight: 600, fontSize: 17, bottom: 5, marginLeft: 5, marginRight: 5 }}>
                {item.qty}
              </Text>
              <TouchableOpacity onPress={() => { addItem(item) }}>
                <Image source={require('../../asset/VectorPlusMini.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity>
                <Text>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      {/* <CartItem 
        cartList={cartList}
      /> */}
      <View style={{ flex: 1, paddingTop: 10 }}>
        <FlatList
          data={cartList}
          renderItem={({ item, index }) => renderItems(item, index)}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <CheckOut />
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  foodcard: {
    flexDirection: "row",
    width: deviceWidth - 40,
    height: 90,
    backgroundColor: "#fff",
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
    width: '54%',
    marginLeft: 15
  },

  foodimage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
})

export default Cart;