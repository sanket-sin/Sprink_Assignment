import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from './src/consts/Colors'
import DemoApp from './src/DemoApp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './src/BottomNavigator';
import { HomeScreen } from './src/screens/HomeScreen';


export default function App() {
  

  return (
    
    <View style={styles.container}>
      <DemoApp></DemoApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
