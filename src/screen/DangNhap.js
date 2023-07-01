import React, { useState, useEffect, Component } from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import Constants from "expo-constants";
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, setDoc, db, doc, } from "../../firebase";
import { useNavigation } from '@react-navigation/native';

const DangNhap = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(true);

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
                console.log("Logged in with: ", user.uid);
            })
            .catch(error => alert(error.message));
    }

    return (
        <View style={styles.container}>
            <Image source={require('../asset/Nền1.png')} style={styles.background1} />
            <Image source={require('../asset/Nền2.png')} style={styles.background2} />
            <View style={styles.page}>
                <View style={styles.logo}>
                    <Image source={require('../asset/Logo1.png')} style={{width: '80%', height: '50%'}} />
                </View>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={styles.content}>
                        <View style={styles.input}>
                            <View style={styles.icon}>
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
                            <View style={styles.icon}>
                                <AntDesign name="lock" size={16} color="#B9B9B9" />
                            </View>
                            <View style={styles.typePass} >
                                <TextInput
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                    secureTextEntry={passwordVisible}
                                    style={styles.typePass}
                                    placeholder='Password' />
                            </View>
                            <TouchableOpacity style={styles.eye} onPress={() => setPasswordVisible(!passwordVisible)}>
                                {!passwordVisible ? (
                                    <Ionicons
                                        name="eye-outline"
                                        style={{
                                            fontSize: 15,
                                            color: "#7A7A7A",
                                            opacity: 0.8,
                                        }}
                                    />
                                ) : (
                                    <Ionicons
                                        name="eye-off-outline"
                                        style={{
                                            fontSize: 15,
                                            color: "#7A7A7A",
                                            opacity: 0.8,
                                        }}
                                    />)}
                            </TouchableOpacity>
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
    logo: {
        width: '60%',
        height: '12%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
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
        borderColor: '#7A7A7A',
    },
    icon: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    typeAccount: {
        fontSize: 13,
        flex: 4,
        color: '#7A7A7A',
    },
    typePass: {
        fontSize: 13,
        flex: 4,
        color: '#7A7A7A',
    },
    eye: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        ...TEXT,
        height: 35,
        borderRadius: 12,
        fontSize: 13,
        marginTop: 20,
        color: '#fff',
        backgroundColor: "#EA5C2B",
        paddingTop: 7,
    },
    forgetPassword: {
        ...TEXT,
        height: 35,
        fontSize: 13,
        marginTop: 10,
        color: '#7A7A7A',
        paddingTop: 7,
    },
    signUp: {
        ...TEXT,
        height: 35,
        fontSize: 13,
        color: '#7A7A7A',
        paddingTop: 7,
    },
});

export default DangNhap;
