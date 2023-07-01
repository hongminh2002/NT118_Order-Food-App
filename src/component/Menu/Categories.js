import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions, TextInput, Image, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFonts } from 'expo-font';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth, db, collection, getDocs, updateDoc, doc, getDoc, } from '../../../firebase'

let myUserId = '';

const Categories = () => {
    const [currentSelected, setCurrentSelected] = useState([0]);
    const [searchText, setSearchText] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const isFocused = useIsFocused();

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
    useEffect(() => {
        getCartItems();
    }, [isFocused]);
    const getCartItems = async () => {
        { auth.currentUser.uid ? myUserId = auth.currentUser.uid : navigation.navigate('Login') };
        const docRef = await getDoc(doc(db, 'users', myUserId));
        setCartCount(docRef.data().cart.length);
    };
    const onAddToCart = async (item, index) => {
        const docRef = await getDoc(doc(db, 'users', `${myUserId}`));
        if (docRef.exists()) {
            console.log("Cart data:", docRef.data().cart);
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such cart");
        }

        // console.log('Document data: ', docRef);
        let tempDart = [];
        tempDart = docRef.data().cart;
        if (tempDart.length > 0) {
            let existing = false;
            tempDart.map((eachItem) => {
                if (eachItem.id == item.id) {
                    existing = true;
                    eachItem.qty = eachItem.qty + 1;
                }
            });
            if (existing == false) {
                tempDart.push(item);
            }
            await updateDoc(doc(db, 'users', `${myUserId}`), {
                cart: tempDart,
            });
        } else {
            tempDart.push(item);
        }
        console.log(tempDart);
        await updateDoc(doc(db, 'users', `${myUserId}`), {
            cart: tempDart,
        });
        getCartItems();
    };

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

    const renderItems = (item, index) => {
        console.log('Item:', item);
        return (
            <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                style={{ paddingVertical: 8 }}
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
                            {VND.format(item.price)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{ justifyContent: "flex-end", alignItems: "flex-end", paddingBottom: 10 }}
                        onPress={() => { onAddToCart(item, index); }}
                    >
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
        return null;
    }

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <View style={{ flex: 1 }}>
            {/* ----------Header---------- */}
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
                <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => setModalVisible(true)}>
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
            {/* ----------Body---------- */}
            <View style={{ flex: 1 }}>
                {/* ----------Sort Modal---------- */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Text style={{ fontFamily: "Roboto-Bold", fontSize: 14, marginVertical: 10, }}>
                                    Lọc sản phẩm
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.sort_text}
                                onPress={() => {
                                    const filteredFoods = menuItems[currentSelected]?.fooditems?.sort((a, b) => a.name > b.name ? 1 : -1,);
                                    setModalVisible(false);
                                }}
                            >
                                <Ionicons
                                    name="text"
                                    style={{
                                        paddingLeft: 5,
                                        fontSize: 20,
                                        color: "#7A7A7A",
                                        opacity: 0.8,
                                        paddingRight: 5,
                                        alignSelf: "center",
                                    }}
                                />
                                <Text>Lọc theo tên</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sort_text}
                                onPress={() => {
                                    const filteredFoods = menuItems[currentSelected]?.fooditems?.sort((a, b) => a.price - b.price);
                                    setModalVisible(false);
                                }}
                            >
                                <Ionicons
                                    name="trending-up"
                                    style={{
                                        paddingLeft: 5,
                                        fontSize: 20,
                                        color: "#7A7A7A",
                                        opacity: 0.8,
                                        paddingRight: 5,
                                        alignSelf: "center",
                                    }}
                                />
                                <Text>Giá từ thấp đến cao</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sort_text}
                                onPress={() => {
                                    const filteredFoods = menuItems[currentSelected]?.fooditems?.sort((a, b) => b.price - a.price);
                                    setModalVisible(false);
                                }}
                            >
                                <Ionicons
                                    name="trending-down"
                                    style={{
                                        paddingLeft: 5,
                                        fontSize: 20,
                                        color: "#7A7A7A",
                                        opacity: 0.8,
                                        paddingRight: 5,
                                        alignSelf: "center",
                                    }}
                                />
                                <Text>Giá từ cao đến thấp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sort_text}
                                onPress={() => {
                                    const filteredFoods = menuItems[currentSelected]?.fooditems?.sort(eachFood => eachFood.isFeatured != true ? 1 : -1,);
                                    setModalVisible(false);
                                }}
                            >
                                <Ionicons
                                    name="star"
                                    style={{
                                        paddingLeft: 5,
                                        fontSize: 20,
                                        color: "#7A7A7A",
                                        opacity: 0.8,
                                        paddingRight: 5,
                                        alignSelf: "center",
                                    }}
                                />
                                <Text>Bán chạy nhất</Text>
                            </TouchableOpacity>
                            <View style={{ width: '100%', alignItems: 'center', paddingTop: 15, }}>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Ionicons
                                        name="close"
                                        style={{
                                            fontSize: 25,
                                            color: "#EA5C2B",
                                            opacity: 0.8,
                                            alignSelf: "center",
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* ----------Category---------- */}
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
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 14, marginTop: 10, }}>
                            {menuItems[currentSelected]?.text}
                        </Text>
                    </View>
                </View>
                {filteredFoods?.length > 0 ?
                    <FlatList
                        data={filteredFoods}
                        renderItem={({ item, index }) => renderItems(item, index)}
                        //keyExtractor={(item) => (item ? item.id.toString() : '')}
                        showsVerticalScrollIndicator={false}
                    /> :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', }}>No food found</Text>
                    </View>}
                {/* {
                    MenuItems[currentSelected].fooditems.map(renderItems)
                } */}
            </View>
        </View>
    )
}

export default Categories

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#EA5C2B',
        padding: 10,
        height: 60,
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

    sort_text: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },

    text_input: {
        backgroundColor: 'white',
        width: 230,
        height: 30,
        right: 5,
        borderRadius: 30,
        padding: 6,

    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#rgba(0,0,0,0.5)',
    },

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

    button: {
        borderRadius: 20,
        padding: 5,
        elevation: 5,
        alignContent: 'center',
        justifyContent: 'center'
    },

    buttonClose: {
        backgroundColor: '#FFF',
        borderRadius: 45,
    },

    container: {
        marginTop: 5,
        paddingTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        paddingBottom: 10,
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
    modalView: {
        width: deviceWidth - 120,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingVertical: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'space-between',
    },
})