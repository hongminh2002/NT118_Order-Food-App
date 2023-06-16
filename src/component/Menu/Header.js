import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { auth, app, db, getFirestore, collection, collectionGroup, addDoc, getDocs, updateDoc, doc, getDoc, query, where } from '../../../firebase'

const Header = () => {
    const [searchText, setSearchText] = useState('')
    const [cartCount, setCartCount] = useState(0);

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        getCartItems();
    }, [isFocused]);

    const getCartItems = async () => {
        {auth.currentUser.uid ? myUserId = auth.currentUser.uid : navigation.navigate('Login')};
        const docRef = await getDoc(doc(db, 'users', myUserId));
        setCartCount(docRef.data().cart.length);
    };

    return (
        <View style={styles.header}>
            <View
                style={{
                    flexDirection: "row",
                    marginRight: 10,
                    alignItems: "center",
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: '#D9D9D9',
                }}
            >
                <TextInput placeholder="Search..."
                    onChangeText={(text) => {
                        setSearchText(text)
                    }}
                    style={{
                        backgroundColor: 'white',
                        color: 'white',
                        fontSize: 16,
                        paddingLeft: 5,
                        borderRadius: 20,
                        width: 244,
                        //flex: 1,
                        marginEnd: 10,
                    }}
                />
                <Ionicons
                    name="search"
                    style={{
                        fontSize: 25,
                        color: "#7A7A7A",
                        opacity: 0.8,
                        paddingRight: 5,
                        alignSelf: "center",
                    }}
                />
            </View>
            <TouchableOpacity style={{ paddingRight: 10 }}>
                <Ionicons
                    name="options"
                    style={{
                        fontSize: 25,
                        color: "white",
                        marginHorizontal: 5,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Image source={require('../../asset/Cart.png')} />
            </TouchableOpacity>
            <View style={styles.count}>
                    <Text style={{ color: '#fff' }}>{cartCount ? cartCount : '0'}</Text>
                </View>
        </View>
    );
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    count: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        top: 5,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        backgroundColor: '#EA5C2B',
        padding: 10,
        height: 60,
        //width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        height: 20,
        width: 102,
        marginRight: 10,
    },

    search_input: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    text_input: {
        backgroundColor: 'white',
        width: 230,
        height: 30,
        right: 5,
        borderRadius: 30,
        padding: 6,

    },

    button: {
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default Header;