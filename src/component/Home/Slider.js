import { Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react' 
import { MaterialIcons } from '@expo/vector-icons'; 
const Slider = () => {
    return (
        <View>
            <View style={{ height: 150 }}>
                <Image style={{ width: '100%', height: 150, resizeMode: 'contain', borderRadius: 12, borderColor: '#DD3636', borderWidth: 3 }}
                    source={require('../../asset/HomeImage/poster2.jpg')}/>
            </View>
            <View style={styles.smallDots} >
                <View style={styles.currentDot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 16, }}>
                <View style={styles.iconLocation}>
                    <MaterialIcons name="location-pin" size={16} color="white" />
                </View>
                <Text style={{ color: '#EA5C2B', fontSize: 12, }} >
                    44 Tân Lập, Đông Hòa, Dĩ An, Bình Dương
                </Text>
            </View >
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    smallDots: {
        height: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    currentDot: {
        height: 8,
        width: 8,
        borderRadius: 6,
        backgroundColor: '#EA5C2B',
        marginHorizontal: 3,

    },

    dot: {
        height: 8,
        width: 8,
        borderRadius: 6,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 3,
    },

    iconLocation: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor: '#EA5C2B',
        marginRight: 9,
        justifyContent: 'center',
        alignItems: 'center', 
    },

})