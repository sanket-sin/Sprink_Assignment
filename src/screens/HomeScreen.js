import React from 'react'
import { ScrollView, TouchableNativeFeedbackComponent,SafeAreaView, TouchableOpacity,StyleSheet,View,Text } from 'react-native'
import COLORS from '../consts/Colors';
import {PrimaryButton} from '../Button';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cart from '../screens/Cart'
import WeeklyCalendar from 'react-native-weekly-calendar';
import {WeekCalendar} from '../WeekCalendar';

const HomeScreen = () =>{
    return (
        
    <View style={style.container}>
        
    <View>
      
    </View>
        <ScrollView style={{top:10,height:10,}}
                
                
                contentContainerStyle={style.category}>
                    <WeekCalendar></WeekCalendar>

                    <ScrollView horizontal style={{marginBottom:5}}>
                    <TouchableOpacity>
                        <View style={ style.categoryBtn}>
                            <View style={style.categoryImage}>
                                <Text style={style.edit}>4</Text>
                            </View>
                            <Text style={style.titl}>
                                 Edit Food Preferences
                                 
                        
                            </Text>
                            <IonIcons name="options"  size={20} style={{marginLeft:8,marginTop:4}} /> 
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={ style.categoryBtns}>
                        {/* <View style={style.categoryImage}></View> */}
                        <Text style={style.titl}>Cuisines
                        
                        </Text>
                        <IonIcons name="chevron-down"  size={20} style={{marginLeft:8,marginTop:4}} />
                        
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={ style.categoryBtN}>
                        <Text style={style.titl}> Protein Preferences </Text>
                        </View>
                    </TouchableOpacity>
                    </ScrollView>
                    
                        
            <Cart></Cart>            
            
        <View style={style.topBox}>
        
        <Text style={style.tit}>
            These dishes are served as part of the subscription.
        </Text>
        <PrimaryButton
            onPress={() => navigation.navigate('DemoApp')}
            title="Show Pricing and Plans"style={{marginBottom:30}}>
        </PrimaryButton>        
    </View> 

      

            </ScrollView>
            
    </View>               

        
    )
};

const style = StyleSheet.create({
    topBox:{
        top:-30
    },
    category: {
        paddingVertical: 0,
        top: 0,
        // alignItems:'top',
        paddingHorizontal:10,
    },
    
    categoryImage:{
        height:25,
        width:25,
        borderRadius:35,
        backgroundColor:COLORS.babyBlue,

    },
    container: {
        flex: 1,
        width: 360,
        height:800    
        },
    
    tit: {
    textAlign: 'center',
    borderRadius: 25,
    fontSize: 12,
    fontWeight: 'bold',
    top: -10,
    },

    button: {
        borderRadius: 125,
        },
        title: {
        textAlign: 'center',
        borderRadius: 25,
        fontSize: 12,
        fontWeight: 'bold',
        },
        
    edit:{
      color  :COLORS.black,
      fontWeight: 'bold',
        fontSize:18,
        paddingHorizontal:7,
        paddingVertical:1

    },
    categoryBtn: {
        height:35,
        width:260,
        backgroundColor: COLORS.white,
        marginRight:4,
        borderRadius:30,
        alignItems:'center',
        paddingHorizontal:5,
        flexDirection: 'row',
        borderWidth:0.5,
        borderColor:COLORS.aqua
        
    },
    titl: {
        color: COLORS.black,
        fontWeight: '400',
        fontSize:18,
        paddingLeft:10
    },
    
    categoryBtns: {
        height:35,
        width:130,
        backgroundColor: COLORS.white,
        marginRight:4,
        borderRadius:30,
        alignItems:'center',
        paddingHorizontal:5,
        flexDirection: 'row',
        borderWidth:0.5,
        borderColor:COLORS.aqua
        
    },
    
    categoryBtN: {
        height:35,
        width:200,
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

