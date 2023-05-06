import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const InputText = () => {
    const [minValue, setMinValue] = React.useState(0);
    const [maxValue, setMaxValue] = React.useState(0);
    return (
        <View style={styles.minmax}>
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                placeholder="Min"
                value={minValue}
                onChangeText={(text) => setMinValue(text)}
            />
            <Text style={styles.textMinus}>-</Text>
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                placeholder="Max"
                value={maxValue}
                onChangeText={(text) => setMaxValue(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 65,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 5, 
        borderWidth: 0.75,
        borderColor: 'rgba(122, 122, 122, 0.5)',

    },
    textMinus: {
        top: 12,
        fontSize: 30,
        color: 'rgba(122, 122, 122, 0.5)',


    },
    minmax: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 15,
    }
});

export default InputText;