import React from 'react';
import WeeklyCalendar from 'react-native-weekly-calendar';
import { View, StyleSheet, } from 'react-native'


const WeekCalendar = () => {
    return(
        
      <View style={styles.calendar}>
      <WeeklyCalendar 
       style={{ height: 0,width:670 }} />
    </View>
    )
}

const styles = StyleSheet.create({
    calendar: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'top',
      justifyContent: 'top',
      marginBottom: 130 
    },
});

export {WeekCalendar};

