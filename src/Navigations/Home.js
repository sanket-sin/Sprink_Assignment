import * as  React from 'react';
import {View, Text} from 'react-native';

export default function Home ({navigation}) {
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text
                onPress={() => alert('This is Home Screen ')}
                style={{
                    fontSize:25,
                    fontWeight: 'bold',
                }} Home Screen
            ></Text>
        </View>
    )
}
export  {Home};