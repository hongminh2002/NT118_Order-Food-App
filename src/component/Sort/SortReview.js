import { Image, Button, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
 import { FontAwesome,Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';
import Checkbox from '../Sort/CheckBox';

const SortReview = ({ navigation }) => {

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>

            <View style={styles.header}>
                <Feather style={{ fontWeight: 700, paddingVertical: 5, }} name="x" size={40} color="#e7613c" />
            </View>

            <ScrollView >
                <View style={{ borderBottomColor: 'rgba(122, 122, 122, 0.5)', borderBottomWidth: 0.75, top: 44, }} ></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 15, }}>
                    <View style={{ flexDirection: 'row' }}>

                        <MaterialCommunityIcons name="tune-vertical-variant" size={20} color="#FF7F3F" />
                        <Text style={styles.textCate} onPress={() => navigation.navigate('Sort')}>Sắp xếp theo</Text>
                    </View>
                    <Text style={styles.textCate}>Danh mục</Text>
                    <Text style={[styles.textCate, { color: '#FF7F3F' }, { paddingRight: 5 }, { borderBottomColor: '#FF7F3F' }, { borderBottomWidth: 1 },]} onPress={() => navigation.navigate('SortReview')}>Đánh giá</Text>
                    <Text style={styles.textCate} onPress={() => navigation.navigate('SortMoney')}>Giá tiền</Text>
                </View>

                <Text style={styles.textSort}>Đánh giá</Text>
                <View style={styles.sortValues}>
                    <View style={styles.starShine}>
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                    </View>
                    <View style={styles.roundCheck}>
                        <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
                    </View>
                </View>

                <View style={styles.sortValues}>
                    <View style={styles.starShine}>
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                    </View>
                    <View style={styles.roundCheck}>
                        <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
                    </View>
                </View>


                <View style={styles.sortValues}>
                    <View style={styles.starShine}>
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                    </View>
                    <View style={styles.roundCheck}>
                        <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
                    </View>
                </View>

                <View style={styles.sortValues}>
                    <View style={styles.starShine}>
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                    </View>
                    <View style={styles.roundCheck}>
                        <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
                    </View>
                </View>
                <View style={styles.sortValues}>
                    <View style={styles.starShine}>
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                        <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
                    </View>
                    <View style={styles.roundCheck}>
                        <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: { 
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 127, 63, 0.4)'

    },

    sortValues: {
        height: 50,
        borderRadius: 5,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 35,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.75,
        borderColor: 'rgba(122, 122, 122, 0.5)',

    },

    textSort: {
        color: '#FF7F3F',
        fontWeight: 700,
        marginHorizontal: 35,
        fontSize: 18,
        marginBottom: 5,

    },

    textList: {
        marginLeft: 20,
        fontWeight: 700,

    },
    textCate: {
        fontWeight: 700,
        fontSize: 14,
        paddingBottom: 8,
    },

    roundCheck: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    starShine: {
        flexDirection: 'row',
        paddingLeft: 10,
    },
    fiveStar: {
        paddingRight: 5,
    },

},

);
export default SortReview