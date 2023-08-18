import {View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create(
    {
        input_style:{
            color: 'white',
            backgroundColor: 'grey',
            padding: 10,
            margin: 10,
            width: 100,
            height: 30
        },
        heading:{
            textAlign:'center',
            fontSize: 40,
            color: 'white'
        },
        container:{
            width: '100%',
            height: '100%'
        },
        form_container:{
            flex:0.5,
            backgroundColor: 'red',
            width: '100%',
        }
    }
)

const app = () => {
    return (
        <View style={{backgroundColor: 'darkblue'}}>
            <View style={styles.container}>
                <Text style={styles.heading}>CYBER SENTINEL</Text>
                <View style={styles.form_container}>
                    <Text>Username/Email</Text>
                    <TextInput style={styles.input_style} defaultValue='Username'></TextInput>
                    <Text>Password</Text>
                    <TextInput style={styles.input_style}defaultValue='Password'></TextInput>
                    <Button 
                        title='Login'
                        style={{width: '30%', height: '10%'}}
                    />
                </View>
                <View style={styles.form_container}>
                    <Text>Forgot password?</Text>
                </View>
            </View>
        </View>
    );
}

const LoginButton = () => {
    <TouchableOpacity >
        <Text>Login</Text>
    </TouchableOpacity>
}

export default app;