import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const [searchText, setSearchText] = useState('')
    const navigation = useNavigation();

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
                    name="filter"
                    style={{
                        fontSize: 25,
                        color: "white",
                        opacity: 0.8,
                        marginHorizontal: 5,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Image source={require('../../asset/Cart.png')} />
            </TouchableOpacity>
        </View>
    );
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#EA5C2B',
        padding: 10,
        height: 50,
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