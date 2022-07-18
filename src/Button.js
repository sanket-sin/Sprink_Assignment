import React from 'react';
import { StyleSheet, TouchableOpacity,View, Text } from 'react-native';
import COLORS from './consts/Colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
    return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={style.btnContainer}>
            <Text style={style.title}>{title}</Text>
        </View>
    </TouchableOpacity>
};

const style = StyleSheet.create({
    btnContainer: {
        backgroundColor: COLORS.blue,
        height:60,
        borderRadius:30,
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