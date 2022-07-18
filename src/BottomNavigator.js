// import React from 'react';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import COLORS from './consts/Colors';
// import MyProfile from './screens/MyProfile';
// import ViewMenu from './screens/ViewMenu';
// import More from './screens/More';
// import HomeScreen from './screens/HomeScreen';

// // const Tab = createBottomTabNavigator();

// const BottomNavigator = () =>{
//     return <Tab.Navigator
//             tabBarOptions={{
//                 style: {
//                     height:55,
//                     borderTopWidth:0,
//                     elevation: 0,
//                 },
//                 showLabel:false,
//                 activeTintColor: COLORS.blue,
//             }}>
//         <Tab.Screen 
//         name="HomeScreen" 
//         component={HomeScreen}
//         options={{
//             tabBarIcon: ({color}) =>( 
//             <Icon name = "home-filled" color={color} size={28}></Icon>),
//             }}>
//         </Tab.Screen>
//         <Tab.Screen 
//         name="MyProfile" 
//         component={MyProfile}
//         options={{
//             tabBarIcon: ({color}) =>( 
//             <Icon name = "myprofile" color={color} size={28}></Icon>),
//             }}>
//         </Tab.Screen>
//         <Tab.Screen 
//         name="ViewMenu" 
//         component={ViewMenu}
//         options={{
//             tabBarIcon: ({color}) =>( 
//             <Icon name = "user" color={color} size={28}></Icon>),
//             }}>
//         </Tab.Screen>
//         <Tab.Screen 
//         name="More" 
//         component={More}
//         options={{
//             tabBarIcon: ({color}) =>( 
//             <Icon name = "More" color={color} size={28}></Icon>),
//             }}>
//         </Tab.Screen>
//     </Tab.Navigator>;
// }

// export {BottomNavigator} ;