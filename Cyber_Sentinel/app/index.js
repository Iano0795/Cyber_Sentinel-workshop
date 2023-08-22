import {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';

import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import { Stack } from 'expo-router';


const app = () => {
    return (
        <SafeAreaView>
            <Stack.screen
                options={{
                    headerStyle: {background:COLORS.lightWhite}
                    headerShadowVisible
                }}
            />
        </SafeAreaView>
    );
}

const LoginButton = () => {
    <TouchableOpacity >
        <Text>Login</Text>
    </TouchableOpacity>
}

export default app;