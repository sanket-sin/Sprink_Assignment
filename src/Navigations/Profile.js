import * as  React from 'react';
import {View, Text} from 'react-native';

export default function Profile ({navigation}) {
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text
                onPress={() => navigation.navigate('Profile')}
                style={{
                    fontSize:25,
                    fontWeight: 'bold',
                }} 
            > Profile Screen </Text>
        </View>
    )
}
export {Profile};