import React from 'react';
import { FlatList, SafeAreaView, StyleSheet,View,Text } from 'react-native';
import COLORS from '../consts/Colors';
import Foods from '../consts/Foods'

const Cart = () => {

    const CartCard = ({item}) => {
        return <View style={style.cardCarts}>

                    <View style={{
                        height:300,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1}}>
                            
                            <Text style={{ fontSize:14}}> {item.time} </Text>
                            <Text style={{fontWeight:'bold', fontSize:20,}}> {item.name}</Text>
                            <Text style={{ fontSize:18 ,fontWeight:'bold',fontStyle:'italic',color: COLORS.yellow}}> {item.cate}</Text>
                            <Text style={{ fontSize:11,fontWeight:'bold', color: COLORS.grey,marginTop:5}}> {item.ingredients}</Text>
                            <Text style={{fontWeight:'bold', fontSize:16,marginTop:6}}> {item.details}</Text>
                            <Text style={{fontWeight:'bold', fontSize:16,color:COLORS.red,marginTop:3}}> {item.scale}</Text>
                            <Text style={{fontWeight:'bold', fontSize:16,marginTop:5}}> {item.price}</Text>
                        
                             <View>
                                <Text style={{fontSize:16,marginTop:5}}> {item.protein}      | {item.carbs}    | {item.fats}     | {item.fibre} </Text>
                                <Text style={{fontSize:16,}}>{item.p} | {item.c} | {item.fa}  | {item.f}</Text>
                            </View> 
                    </View>
                    
                    <View style={{marginRight:0,top:5, alignItems: 'center'}}>
                                <Text style={{fontSize:16,marginTop:15,fontWeight:'200'}}> {item.lab}</Text>
                                <Text style={{fontSize:20,fontWeight:'normal'}}>₹{item.price}</Text>
                    </View>
        </View>
    }

    return (
        <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
            <FlatList 
            showsVerticalScrollIndicator={false}
             contentContainerStyle={{paddingBottom:60}}
             data= {Foods}
             renderItem={({item}) => <CartCard item = {item}/>} />
             
        </SafeAreaView>
    );
    
}

const style = StyleSheet.create({
    cardCarts: {
        height:260,
        elevation:15,
        borderRadius:10,
        backgroundColor:COLORS.light,
        marginHorizontal:10,
        marginTop:10, 
        paddingHorizontal:10,
        top: 0,
        flexDirection: 'row',
        color:COLORS.red,
    }
});

export  default Cart;