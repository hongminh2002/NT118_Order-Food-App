import React, {useState, useEffect} from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
//import DatHangButton from "./DatHangButton";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { auth, app, db, getFirestore, collection, addDoc, getDocs, updateDoc, doc, getDoc } from '../../../firebase'

const windowWidth = Dimensions.get('window').width;

const CheckOut = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        getCartItems();
    }, [isFocused]);
    const getCartItems = async () => {
        myUserId = auth.currentUser.uid;
        const docRef = await getDoc(doc(db, 'users', myUserId));
        setCartList(docRef.data().cart);
        //getCartItems();
    };

    const getTotal = () => {
        let total = 0;
        cartList.map(item => {
            total += item.price * item.qty;
        });
        console.log(total);
        return total;
    };
    return (
        <View style={{
            height: '12%',
            width: windowWidth,
            //borderRadius:12,
            backgroundColor: '#EA5C2B',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
        }}>
            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: "bold" }}>
                    Tổng thanh toán
                </Text>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
                    {getTotal() + 'VNĐ'}
                </Text>
            </View>
            {/* <DatHangButton /> */}
            <TouchableOpacity
                onPress={() => navigation.navigate('OrderConfirm')}
                style={{
                    width: windowWidth - 270,
                    height: '60%',
                    backgroundColor: 'white',
                    borderRadius: 12,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginRight: 20
                }}>
                <Text style={{
                    color: '#FF7F3F',
                    fontWeight: 'bold',
                    fontSize: 16,
                    alignSelf: 'center'
                }}>
                    {'Đặt hàng (' + cartList.length + ')'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default CheckOut;
