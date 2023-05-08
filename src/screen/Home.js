import { Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import categories from '../component/Home/Categories';
import food from '../component/Home/Food';
import founders from '../component/Home/Founder';
import vouchers from '../component/Home/Vouchers';
import BottomTab from '../component/BottomTab';
import Slider from '../component/Home/Slider'
import AboutUs from '../component/Home/AboutUs';

const Home = ({ navigation }) => {

    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const [selectedFounderIndex, setSelectedFounderIndex] = React.useState(0);
    const [selectedVoucherIndex, setSelectedVoucherIndex] = React.useState(0);

    const ListCategories = () => {
        return (<View style={styles.list}>
            {categories.map((category, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
                    <View style={[
                        styles.optionList,  
                        { backgroundColor: index % 2 === 0 ? '#ffdfcf' : '#feecd1' },]}>
                        <View style={{ padding: 5, }}>
                            <Image style={{ width: '100%', height: 40, resizeMode: 'contain', }}
                                source={category.image}
                            />
                            <Text style={styles.optionText}>{category.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>)
    }

    const Card = ({ food }) => {
        return (
            <TouchableHighlight style={styles.cardTouch} underlayColor='white' activeOpacity={0.9} onPress={() => navigation.navigate('FoodDetail', food)}>

                <View style={[styles.foodList, {marginLeft: food.id%2===0 ? 23 : 0,}]}>
                    <View style={{ width: '100%', height: 120, backgroundColor: '#feecd1', borderRadius: 12, }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ marginVertical: 10, width: '100%', height: 66, resizeMode: 'contain' }}
                                source={food.image}
                            />
                        </View>
                        <View style={styles.nameIcon}>

                            <Text style={styles.foodName}>{food.name}</Text>
                            <View style={styles.iconName} >
                                <Text style={{ color: 'white', fontWeight: 700, fontSize: 10, }}>{food.price}</Text>
                                <View style={styles.iconCart} >
                                    <Icon name="cart-outline" size={14} color="white" /></View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    const ListFounders = () => {
        return (<View style={styles.list}>
            {founders.map((founder, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedFounderIndex(index)}>
                    <View style={[
                        styles.optionFounder,
                        { backgroundColor: index % 2 === 0 ? '#ffdfcf' : '#feecd1' }, { borderWidth: index == 0 ? 3 : 0 }, { borderColor: index == 0 ? '#EA5C2B' : 'transparent' }
                    ]}>
                        <View style={{ padding: 5, }}>
                            <Image style={{ width: '100%', height: 55, resizeMode: 'contain', }}
                                source={founder.image}
                            />
                        </View>
                    </View>
                    <Text style={styles.optionName}>{founder.name}</Text>
                </TouchableOpacity>
            ))}
        </View>)
    }

    const ListVouchers = () => {
        return (<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentScroll}>
            {vouchers.map((voucher, index) => (
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} key={index} onPress={() => setSelectedVoucherIndex(index)}>
                    <View style={{ ...styles.voucherContainer }}>
                        <View style={styles.vouchersImg}>
                            <Image style={{
                                height: 100, width: 200, resizeMode: 'cover', borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                            }}
                                source={voucher.image}
                            />
                        </View>

                    </View>
                    <View style={[styles.runBtn, { display: index == vouchers.length - 1 ? 'none' : 'flex' }]}>
                        <Icon name="menu-right" size={30} color="white" />
                    </View>
                </TouchableOpacity>

            ))}
        </ScrollView>)
    }
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, padding: 18, backgroundColor: 'white', }}>
                <View>
                    <Slider />
                </View>
                <View>
                    <ListCategories />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.mainTitle}>Best Seller</Text>
                    <View style={styles.moreView}>
                        <Text style={styles.textMore} >More</Text>
                        <View style={styles.iconMore}>
                            <FontAwesome name="sort" size={16} color="white" />
                        </View>
                    </View>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={food}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => <Card food={item} />
                    }
                />
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.mainTitle}>About Us</Text>
                    <View style={styles.moreView}>
                        <Text style={styles.textMore} >More</Text>
                        <View style={styles.iconMore}>
                            <FontAwesome name="sort" size={16} color="white" />
                        </View>
                    </View>
                </View>
                <AboutUs />
                <View style={{ marginVertical: 16, }}>
                    <View style={{ paddingVertical: 16, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{
                            color: '#4d4d4d', fontSize: 18, fontWeight: 700, textShadowColor: 'rgba(0, 0, 0, 0.2)',
                            textShadowOffset: { width: 2, height: 2 },
                            textShadowRadius: 3,
                        }}>FOUNDERS</Text>
                    </View>
                    <ListFounders />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.contactButton}>
                            <Text style={{ fontSize: 11, fontWeight: 700, color: 'white' }}>CONTACT US</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.mainTitle}>Voucher</Text>
                    <View style={styles.moreView}>
                        <Text style={styles.textMore} >More</Text>
                        <View style={styles.iconMore}>
                            <FontAwesome name="sort" size={16} color="white" />
                        </View>
                    </View>
                </View>
                <View>
                    <ListVouchers />
                </View>
            </SafeAreaView>
        </ScrollView >
    )
}

export default Home;

const styles = StyleSheet.create({


    list: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    optionList: {
        height: 65,
        width: 78,
        borderRadius: 12,
        marginBottom: 15,
        justifyContent: 'space-between',

    },


    optionText: {
        textAlign: 'center',
        fontSize: 11,
        color: '#DD3636',
        fontWeight: 700,
    },


    foodList: { 
        width: '90%', height: 128,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#DD3636',
        borderRadius: 12,
        justifyContent: 'space-between', 
    },

    nameIcon: {
        backgroundColor: '#EA5C2B',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    foodName:
    {
        color: 'white',
        fontWeight: 700,
        fontSize: 10,
    },

    iconName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    iconCart: {
        color: '#f28d56',
        borderRadius: 8,
        backgroundColor: '#f28d56',
        width: 40,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainTitle: {
        fontWeight: '700',
        width: '80%',
        fontSize: 17,
        color: '#EA5C2B',
        paddingVertical: 16,
    },

    moreView: {
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    textMore: {
        color: '#EA5C2B',
        fontWeight: 700,
        marginRight: 10,
        fontSize: 15,
    },
    iconMore: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#EA5C2B',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Button: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#DD3636',
        backgroundColor: '#ea5c2b',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 30,
        marginTop: 20,
    },

    optionFounder: {
        height: 75,
        width: 75,
        borderRadius: 100,
        marginBottom: 5,
        justifyContent: 'space-between',

    },

    optionName: {
        color: '#4d4d4d',
        fontSize: 11,
        fontWeight: 700,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        textAlign: 'center',
    },

    contactButton: {
        borderRadius: 12,
        backgroundColor: '#ea5c2b',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 20,
        marginTop: 20,
    },

    contentScroll: {
        alignItems: 'center',
        paddingRight: 10,
    },
    voucherContainer: {
        height: 128,
        width: 234,
        marginRight: 10,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: '#f9c59f',
    },

    vouchersImg: {
        height: 103,
        width: 212,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,

    },

    runBtn: {
        height: 30,
        width: 30,
        backgroundColor: '#FF7F3F',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    cardTouch: {
        flex: 1, 
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center', 
    }
})