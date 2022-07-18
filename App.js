import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from './src/consts/Colors'
import DemoApp from './src/DemoApp';


export default function App() {
  
  return (
   
    <View style={styles.container}>
      {/* <NavigationContainer> */}
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" ></StatusBar>
        {/* <Stack.Navigator screenOptions ={{}}></Stack.Navigator> */}
        {/* <Stack.Screen name="Home" component={BottomNavigator}></Stack.Screen>
      </NavigationContainer> */}
      <DemoApp></DemoApp>
      <StatusBar style="auto" />
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
