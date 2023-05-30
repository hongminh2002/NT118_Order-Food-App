import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('DangNhap');
        }, 3000)
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../asset/Logo.png')}
                style={styles.logo}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EA5C2B'
    },
    logo: {
        height: 40,
        width: 204,
    }
})

export default Splash