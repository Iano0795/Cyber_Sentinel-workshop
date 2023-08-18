import React from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const app = () => {
    return (
       <View style={StyleSheet.container}>
            <Button title='Hello there am custom'/>
       </View>
    );
}

const AppButton = ({onPress, title}) => {
   <TouchableOpacity onPress={onPress} style={styles.appButtonStyle}>
        <Text style={styles.appButton_Text}>{Title}</Text>
   </TouchableOpacity>
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            padding: 16
        }, 
        appButtonStyle: {
            elevation: 8,
            backgroundColor: '#009688',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12
        },
        appButton_Text: {
            fontWeight: 'bold',
            color: "#fff",
            alignSelf: 'center',
            fontSize: 18,
            textTransform: 'uppercase'
        }
    }
)

export default app;