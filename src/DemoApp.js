import React from 'react'
import { Text, View, StyleSheet, Button,SafeAreaView,Alert } from 'react-native'
import { PrimaryButton } from './Button';
import { HomeScreen } from './screens/HomeScreen';
import { Cart } from './screens/Cart'
import IonIcons from 'react-native-vector-icons/Ionicons';
import COLORS from './consts/Colors';
import {Home} from './Navigations/Home';
import {Profile} from './Navigations/Profile';
import {Menu} from './Navigations/Menu';
import {MoreOption} from './Navigations/MoreOption'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import {WeekCalendar} from './WeekCalendar'

const homeName = 'Home';
const menuName = 'View Menu';
const profileName = 'My Profile';
const moreOptionName = 'More Option';

const Tab = createBottomTabNavigator();

const  DemoApp = ()  =>   {
     
        return (
    <SafeAreaView style={styles.container}>
    <View>
          <View>
          <WeekCalendar></WeekCalendar>
          </View>
          
          <View style={styles.home}>
          <HomeScreen></HomeScreen>
          </View>
         
         <Cart></Cart>
         <View style={{marginBottom:30}}>
           
      <Text style={styles.title}>
        These dishes are served as part of the subscription.
      </Text>

      <PrimaryButton
      title="Show Pricing and Plans"style={{marginBottom:30}} ></PrimaryButton> </View>     
    </View>
    
    <NavigationContainer>
                      <Tab.Navigator
                      initialRouteName={homeName}
                      screenOptions={({route}) => ( {
                          tabBarIcon: ({focused,color,size}) => {
                              let iconName;
                              let routeName=route.name;

                              if(routeName=== homeName) {
                                  iconName = focused ?'home' : 'home-outline';
                              }else if 
                              (routeName=== menuName) {
                                  iconName = focused ?'restaurant' : 'restaurant-outline';
                          }else if 
                          (routeName=== profileName) {
                              iconName = focused ?'person' : 'person-outline';
                      }else if 
                      (routeName=== moreOptionName) {
                          iconName = focused ?'menu' : 'menu-outline';
                  }
                      return <IonIcons name={iconName} size= {size} color={color}></IonIcons>

                      },
                      })}
                      tabBarOptions= {{
                        activeTintColor: COLORS.babyBlue,
                        inactiveTintColor: COLORS.grey,
                        labelStyle: {
                          paddingBottom:10,
                          fontSize:20
                        },
                        style: {
                          padding:10, height:70,
                        }
                      }}
                      >
                          <Tab.Screen name={homeName} component={Home} />
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
      justifyContent: 'end',
      marginHorizontal: 16,
      marginBottom:20

    },
    button: {
      borderRadius: 125,
    },
    title: {
      textAlign: 'center',
      borderRadius: 25,
      fontSize: 20,
      paddingBottom:20
    },
    
  });
  export default DemoApp;