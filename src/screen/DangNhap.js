import React, { useState, useEffect, Component } from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, setDoc, db, doc, } from "../../firebase";
import { useNavigation } from '@react-navigation/native';

const DangNhap = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('BottomTab');
            }
        })

        return unsubscribe;
    }, [])
    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged in with: ", user.email);
            })
            .catch(error => alert(error.message));
    }

    return (
        <View style={styles.container}>
                <Image source={require('../asset/Nền1.png')} style={styles.background1} />
                <Image source={require('../asset/Nền2.png')} style={styles.background2} />
                <View style={styles.page}>
                    <View>
                        <Text style={styles.pageName}>
                            Đăng nhập
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-between' }}>
                        <View style={styles.content}>
                            <View style={styles.input}>
                                <View style={styles.iconAccount}>
                                    <AntDesign name="user" size={14} color="#B9B9B9" />
                                </View>
                                <View style={styles.typeAccount}>
                                    <TextInput value={email}
                                        onChangeText={(text) => setEmail(text)}
                                        style={styles.typeAccount}
                                        placeholder="Email" />
                                </View>
                            </View>
                            <View style={styles.input}>
                                <View style={styles.iconPass}>
                                    <AntDesign name="lock" size={16} color="#B9B9B9" />
                                </View>
                                <View style={styles.typePass} >
                                    <TextInput
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
                                        secureTextEntry={true}
                                        style={styles.typePass}
                                        placeholder='Password' />
                                </View>
                                <View style={styles.eye}>
                                    <SimpleLineIcons name="eye" size={13} color="#B9B9B9" style={styles.eye} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={handleLogIn}>
                                <Text style={styles.login}>Đăng Nhập</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('QuenMatKhau')}>
                                <Text style={styles.forgetPassword}>Quên Mật Khẩu?</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('DangKy')}>
                                <Text style={styles.signUp}>Chưa có tài khoản? Đăng ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </View>
    );
};

const TEXT = {
    textAlign: "center",
    fontSize: 12,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
        backgroundColor: "#fff",
        paddingTop: Constants.statusBarHeight,
    },
    background1: {
        position: 'absolute',
        width: '100%',
        height: '90%',
    },
    background2: {
        flex: 1,
        position: 'absolute',
        top: 100,
        width: '80%',
        height: 700,
        borderRadius: 30,
        alignSelf: 'center',
    },
    page: {
        top: 100,
        width: '80%',
        height: 450,
        alignSelf: 'center',
    },
    pageName: {
        ...TEXT,
        marginTop: 50,
        color: "#EA5C2B",
        fontSize: 18,
        fontWeight: "bold",
    },
    content: {
        width: '80%',
        alignSelf: 'center',
    },
    input: {
        flexDirection: 'row',
        marginTop: 20,
        height: 39,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#B9B9B9',
    },
    iconAccount: {
        flex: 1,
        top: 10,
        left: 15,
    },
    typeAccount: {
        fontSize: 12,
        flex: 4,
        color: '#B9B9B9',
    },
    iconPass: {
        flex: 1,
        top: 10,
        left: 15,
    },
    typePass: {
        fontSize: 12,
        flex: 3,
        color: '#B9B9B9',
    },
    eye: {
        flex: 1,
        top: 7,
        left: 5
    },
    login: {
        ...TEXT,
        height: 35,
        borderRadius: 12,
        marginTop: 20,
        color: '#fff',
        backgroundColor: "#EA5C2B",
        paddingTop: 7,
    },
    forgetPassword: {
        ...TEXT,
        height: 35,
        marginTop: 10,
        color: '#B9B9B9',
        paddingTop: 7,
    },
    signUp: {
        ...TEXT,
        height: 35,
        color: '#B9B9B9',
        paddingTop: 7,
    },
});

export default DangNhap;
