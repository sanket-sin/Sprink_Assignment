import React from 'react';
import WeeklyCalendar from 'react-native-weekly-calendar';
import { View, StyleSheet, } from 'react-native'

const WeekCalendar = () => {
    return(
        
      <View style={styles.calendar}>
      <WeeklyCalendar 
       style={{ height: 55,width:357,top:25 }} />
    </View>
    )
}

const styles = StyleSheet.create({
    calendar: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      top:0,
      marginBottom: 90 
    },
});

export {WeekCalendar};

