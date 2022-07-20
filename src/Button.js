import React from 'react';
import { StyleSheet, TouchableOpacity,View, Text,Alert } from 'react-native';
import COLORS from './consts/Colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
    return <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert('Buttton Pressed')}>
        <View style={style.btnContainer}>
            <Text style={style.title}>{title}</Text>
        </View>
    </TouchableOpacity>
};

const style = StyleSheet.create({
    btnContainer: {
        backgroundColor: COLORS.blue,
        height:40,
        borderRadius:10,
        marginLeft:8,
        width: 330,
        top: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        color: COLORS.white,
        fontWeight:'bold',
        fontSize:18
    }
})

export {PrimaryButton};