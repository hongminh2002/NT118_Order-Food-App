import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


const AboutUs = () => {
    return (
        <View>

            <View style={{ backgroundColor: '#f5ac82', borderRadius: 12, padding: 15, }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <Image style={{ width: '45%', height: 30, resizeMode: 'contain' }}
                        source={require('../../asset/Logo.png')}
                    />
                    <View style={styles.textGroup}>
                        <Text style={styles.textAlso}>--GROUP 5</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '50%', paddingVertical: 15, }} >
                        <Text style={{ lineHeight: 20, color: 'white' }}>Eating app là một app order đồ ăn vô cùng tiện lợi, nhanh chóng.
                            Đáp ứng đầy đủ nhu cầu hiện có trên thị trường.</Text>
                        <TouchableOpacity style={styles.Button}>
                            <Text style={{ fontWeight: 700, color: 'white' }}>MUA NGAY</Text>
                            <Icon name="menu-right" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: 5, }}>
                        <Image style={{ width: '100%', height: 150, resizeMode: 'contain' }}
                            source={require('../../asset/HomeImage/shipper.png')}
                        />
                    </View>
                </View>
            </View>

        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    textGroup: { width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: 10, },
    textAlso: {
        color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
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


})