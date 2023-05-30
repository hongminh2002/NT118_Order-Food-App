import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Dimensions, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
//import { MenuItems } from './MenuData';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth, app, db, getFirestore, collection, addDoc, getDocs } from '../../../firebase'

const Categories = () => {
    const [currentSelected, setCurrentSelected] = useState([0]);
    const [searchText, setSearchText] = useState('');
    const [menuItems, setMenuItems] = useState([]);

    const filteredFoods = menuItems[currentSelected]?.fooditems?.filter(eachFood => eachFood.name.toLowerCase().match(searchText.toLowerCase()))

    const navigation = useNavigation();

    const getMenuItems = async () => {
        const querySnapshot = await getDocs(collection(db, 'MenuItems'));

        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            text: doc.data().text,
            image: doc.data().image,
            fooditems: doc.data().fooditems,
        }));
        setMenuItems(items);

        console.log(items);
    };

    useEffect(() => {
        getMenuItems();
    }, []);

    const renderCategories = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => setCurrentSelected([index])}>
                <View style={[styles.box, { backgroundColor: currentSelected == index ? '#rgba(255, 127, 63, 0.25)' : '#fff', }]}>
                    <View style={{ width: 50, height: 50 }}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.label}>{item.text}</Text>
                </View>
                {/* <FlatList
                        data={item.fooditems}
                        renderItem={({item}) => renderItems(item)}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    /> */}
            </TouchableOpacity>
        )
    }

    const renderItems = (item) => {
        console.log('Item:', item);
        return (
            <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                style={{ paddingBottom: 15 }}
                onPress={() => navigation.navigate('FoodDetail', item)}
            >
                <View style={styles.foodcard}>
                    <View style={{ width: 150, height: 150 }}>
                        <Image source={{ uri: item.image }} style={styles.foodimage} />
                    </View>
                    <View style={styles.foodinfo}>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 12 }}>
                            {item.name}
                        </Text>
                        <Text style={{ fontFamily: "Roboto-Medium", fontSize: 12 }}>
                            {item.price} VNĐ
                        </Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: "flex-end", alignItems: "flex-end", paddingBottom: 10 }}>
                        <Image
                            source={require("../../asset/icons/plus.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../asset/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../../asset/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../../asset/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.header]}>
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
                            fontSize: 16,
                            paddingLeft: 5,
                            borderRadius: 20,
                            width: 244,
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
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 15, marginBottom: 10 }}>
                        DANH MỤC
                    </Text>
                    <FlatList
                        horizontal
                        data={menuItems}
                        renderItem={renderCategories}
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={styles.categoryname}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 14, margin: 15 }}>
                            {menuItems[currentSelected]?.text}
                        </Text>
                    </View>
                </View>
                {filteredFoods?.length > 0 ?
                    <FlatList
                        data={filteredFoods}
                        renderItem={({ item }) => renderItems(item)}
                        //keyExtractor={(item) => (item ? item.id.toString() : '')}
                        showsVerticalScrollIndicator={false}
                    /> :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', }}>No food found</Text>
                    </View>}
                {/* {
                    MenuItems[currentSelected].fooditems.map(renderItems)
                } */}
            </ScrollView>
        </View>
    )
}

export default Categories

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#EA5C2B',
        padding: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
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
    },

    container: {
        marginTop: 5,
        paddingTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    box: {
        width: 90,
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 30,
        borderRadius: 12,
    },
    categoryname: {
        alignItems: "center",
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: "Roboto-Medium",
        fontSize: 12,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    foodcard: {
        flexDirection: "row",
        width: deviceWidth - 40,
        height: 150,
        backgroundColor: "#fff",
        marginLeft: 20,
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
        alignItems: "center",
        marginTop: 10,
        width: 160,
    },

    foodimage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
})