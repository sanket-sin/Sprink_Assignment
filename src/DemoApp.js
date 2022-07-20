import React from 'react'
import { Text, View, StyleSheet, Button,SafeAreaView,Alert } from 'react-native'
import { PrimaryButton } from './Button';
import { HomeScreen } from './screens/HomeScreen';
// import Cart from './screens/Cart'
import IonIcons from 'react-native-vector-icons/Ionicons';
import COLORS from './consts/Colors';
import {Home} from './Navigations/Home';
import {Profile} from './Navigations/Profile';
import {Menu} from './Navigations/Menu';
import {MoreOption} from './Navigations/MoreOption';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const homeName = 'Home';
const menuName = 'View Menu';
const profileName = 'My Profile';
const moreOptionName = 'More Option';



const Tab = createBottomTabNavigator();

const  DemoApp = ()  =>   {
     
  return (
    
<SafeAreaView style={styles.container}>


<NavigationContainer independent={true}>
                <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ( {
                    tabBarIcon: ({focused,color,size}) => {
                        let iconName;
                        let routeName=route.name;

                        if(routeName=== homeName) {
                            iconName = focused ?'home' : 'home';
                        }else if 
                        (routeName=== menuName) {
                            iconName = focused ?'restaurant' : 'restaurant';
                    }else if 
                    (routeName=== profileName) {
                        iconName = focused ?'person' : 'person';
                }else if 
                (routeName=== moreOptionName) {
                    iconName = focused ?'menu' : 'menu';
            }
                return <IonIcons name={iconName} size= {size} color={color}></IonIcons>

                },
                })}
                tabBarOptions= {{
                  activeTintColor: COLORS.babyBlue,
                  inactiveTintColor: COLORS.grey,
                  labelStyle: {
                    paddingBottom:6,
                    fontSize:12
                  },
                  style: {
                    padding:6, height:60,
                  }
                }}
                >
                    <Tab.Screen name={homeName} component={HomeScreen} />
                    <Tab.Screen name={menuName} component={Menu} />
                    <Tab.Screen name={profileName} component={Profile} />
                    <Tab.Screen name={moreOptionName} component={MoreOption} />
                </Tab.Navigator>
    
</NavigationContainer>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
container: {
flex: 1,
width: 360,
height:800

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

});
export default DemoApp;