import React from 'react'
import { ScrollView, TouchableNativeFeedbackComponent, TouchableOpacity,StyleSheet,View,Text } from 'react-native'
import COLORS from '../consts/Colors';

const HomeScreen = () =>{
    return (
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.category}>
            
            <TouchableOpacity>
                <View style={ style.categoryBtn}>
                    <View style={style.categoryImage}>
                    <Text style={style.edit}>4</Text>
                    </View>
                <Text style={style.title}> Edit Food Preferences </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={ style.categoryBtns}>
                <View style={style.categoryImage}></View>
                <Text style={style.title}>Cuisines</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={ style.categoryBtN}>
                <View style={style.categoryImage}></View>
                <Text style={style.title}> Protein Preferences </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    category: {
        paddingVertical: 0,
        top: 0,
        // alignItems:'top',
        paddingHorizontal:20,
    },
    categoryImage:{
        height:35,
        width:35,
        borderRadius:35,
        backgroundColor:COLORS.babyBlue,

    },
    edit:{
      color  :COLORS.black,
      fontWeight: 'bold',
        fontSize:18,
        paddingHorizontal:10,
        paddingVertical:2

    },
    categoryBtn: {
        height:45,
        width:260,
        backgroundColor: COLORS.white,
        marginRight:7,
        borderRadius:30,
        alignItems:'center',
        paddingHorizontal:5,
        flexDirection: 'row',
        borderWidth:0.5,
        borderColor:COLORS.aqua
        
    },
    title: {
        color: COLORS.black,
        fontWeight: '400',
        fontSize:18,
        
        paddingLeft:10

    },
    
    categoryBtns: {
        height:45,
        width:140,
        backgroundColor: COLORS.white,
        marginRight:7,
        borderRadius:30,
        alignItems:'center',
        paddingHorizontal:5,
        flexDirection: 'row',
        borderWidth:0.5,
        borderColor:COLORS.aqua
        
    },
    
    categoryBtN: {
        height:45,
        width:220,
        backgroundColor: COLORS.white,
        marginRight:7,
        borderRadius:30,
        alignItems:'center',
        paddingHorizontal:5,
        flexDirection: 'row',
        borderWidth:0.5,
        borderColor:COLORS.aqua
        
    },
})

export {HomeScreen};

