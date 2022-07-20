import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../src/consts/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './screens/HomeScreen';
import { StyleSheet} from 'react-native';
import {MyOption} from './screens/MyMoreOption';
import {MyMenu} from './screens/MyMenu';
import MyProfile from './screens/MyProfile'

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator style={styles.tab}
        tabBarOptions={{
            activeTintColor: COLORS.babyBlue,
            inactiveTintColor: COLORS.grey
        }}
         screenOptions={{
            headerShown:false,
        }}>
        <Tab.Screen  
            name = "Home"
            component = {HomeScreen}
            options={{tabBarIcon: ({color,size}) => {
            <IonIcons name="home-outline" color={color} size={size} />
        }
        }}
        /> 
        <Tab.Screen 
            name = "MyMenu"
            component = {MyMenu}
            options={{tabBarIcon: ({color,size}) => {
                <IonIcons name="restaurant-outline" color={color} size={size} />
            }
        }}
        /> 
        <Tab.Screen 
            name = "More"
            component = {MyOption}
            options={{tabBarIcon: ({color,size}) => {
                <IonIcons name="menu-outline" color={color} size={size} />
            }}}
        /> 
        <Tab.Screen 
            name = "My Profile"
            component = {MyProfile}
            options={{tabBarIcon: ({color,size}) => {
                <IonIcons name="person-outline" color={color} size={'20'} />
            }}}
        /> 
    </Tab.Navigator>)
};
const styles = StyleSheet.create({
    tab: {
    }
})

export default BottomNavigator; 