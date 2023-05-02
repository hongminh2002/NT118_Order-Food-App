import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MenuItems } from './MenuData';
import { Image } from 'expo-image';

const Demo = () => {
    const [currentSelected, setCurrentSelected] = useState([0]);

    const renderCategories = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => setCurrentSelected(index)}>
                <View style={[styles.box, { backgroundColor: currentSelected == index ? '#rgba(255, 127, 63, 0.25)' : '#fff', }]}>
                    <View style={{ width: 50, height: 50 }}>
                        <Image
                            source={item.image}
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.label}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderItems = (data, index) => {
        return (
            <TouchableOpacity key={index} style={{ paddingBottom: 15 }}>
                <View style={styles.foodcard}>
                    <View style={{width: 150, height: 150}}>
                        <Image source={data.foodimage} style={styles.foodimage} />
                    </View>
                    <View style={styles.foodinfo}>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 12 }}>
                            {data.foodname}
                        </Text>
                        <Text style={{ fontFamily: "Roboto-Medium", fontSize: 12 }}>
                            {data.price} VNĐ
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
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 15, marginBottom: 10 }}>
                        DANH MỤC
                    </Text>
                    <FlatList
                        horizontal={true}
                        data={MenuItems}
                        renderItem={renderCategories}
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={styles.categoryname}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 14, margin: 15 }}>
                            {MenuItems[currentSelected].text}
                        </Text>
                    </View>
                </View>
                {
                    MenuItems[currentSelected].fooditems.map(renderItems)
                }
            </ScrollView>
        </View>
    )
}

export default Demo

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
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
        contentFit: 'contain',
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