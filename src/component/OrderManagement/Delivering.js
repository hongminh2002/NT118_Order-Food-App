import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import { Table, Row, Rows } from 'react-native-table-component';
import { Order } from './OrderData';

const Delivering = () => {

    // const header = ['Mã đơn hàng', 'Tổng tiền', 'Trạng thái']
    // const data = [
    //     ['gfg1', 'gfg2', 'gfg3'],
    //     ['gfg4', 'gfg5', 'gfg6'],
    //     ['gfg7', 'gfg8', 'gfg9']

    // ]
    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: "row", }}>
                <View style={[styles.tablecolumn1,
                    {
                        paddingVertical: 5,
                        backgroundColor: 'white',
                    }
                ]}>
                    <Text>{item.id}</Text>
                </View>
                <View style={[styles.tablecolumn2, {
                    alignItems: 'flex-end',
                    paddingRight: 2,
                    backgroundColor: 'white',
                }]}>
                    <Text>{item.total} VNĐ</Text>
                </View>
                <View style={[styles.tablecolumn3, {
                    paddingRight: 2,
                    backgroundColor: 'white',
                }]}>
                    <Text>{item.time} - {item.date}</Text>
                </View>
                <View style={[styles.tablecolumn4,
                    {
                        backgroundColor: 'white',
                    }
                ]}>
                    <TouchableOpacity>
                        <Text style={{color: '#448EF6'}}>Xem chi tiết</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
            <View style={{ flexDirection: "row", }}>
                <View style={[styles.tablecolumn1, {
                    backgroundColor: '#rgba(255, 127, 63, 0.25)',
                }]}>
                    <Text>ID</Text>
                </View>
                <View style={[styles.tablecolumn2, {
                    backgroundColor: '#rgba(255, 127, 63, 0.25)',
                    alignItems: 'center',
                }]}>
                    <Text>Tổng tiền</Text>
                </View>
                <View style={[styles.tablecolumn3, {
                    backgroundColor: '#rgba(255, 127, 63, 0.25)',
                    alignItems: 'center',
                }]}>
                    <Text>Thời gian đặt hàng</Text>
                </View>
                <View style={[styles.tablecolumn4, {
                    backgroundColor: '#rgba(255, 127, 63, 0.25)',
                }]}>
                    <Text>Thao tác</Text>
                </View>
            </View>
            <FlatList
                data={Order}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    tablecolumn1: {
        width: deviceWidth * 2 / 12,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#rgba(255, 127, 63, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
    },
    tablecolumn2: {
        width: deviceWidth * 3 / 12,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#rgba(255, 127, 63, 0.25)',
        justifyContent: 'center',
        padding: 1,
    },
    tablecolumn3: {
        width: deviceWidth * 4 / 12,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#rgba(255, 127, 63, 0.25)',
        justifyContent: 'center',
        padding: 1,
    },
    tablecolumn4: {
        width: deviceWidth / 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#rgba(255, 127, 63, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
    },

    button: {
        backgroundColor: '#rgba(255, 127, 63, 0.25)',
        borderRadius: 12,
        width: 100,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    horizontalline: {
        height: 1,
        width: deviceWidth,
        backgroundColor: '#D9D9D9',
        marginTop: 15,
    },
});

export default Delivering;