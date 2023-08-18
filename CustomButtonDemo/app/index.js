import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const app = () => {
    return (
       <View>
            <Button title='Hello there am custom'/>
       </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            padding: 16
        }
    }
)

export default app;