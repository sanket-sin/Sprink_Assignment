import * as  React from 'react';
import {View, Text} from 'react-native';

export default function MoreOption ({navigation}) {
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
            >  More Option Screen </Text>
        </View>
    )
}
export {MoreOption};