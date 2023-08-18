import {View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Button} from 'react-native';

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
            flex: 1,
        },
        form_container:{
            flex:0.5
        }
    }
)

const app = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'darkblue'}}>
            <View>
                <Text style={styles.heading}>CYBER SENTINEL WORKSHOP</Text>
                <View style={styles.form_container}>
                    <Text>Username/Email</Text>
                    <TextInput style={styles.input_style} defaultValue='Username'></TextInput>
                    <Text>Password</Text>
                    <TextInput style={styles.input_style}defaultValue='Password'></TextInput>
                    <Button 
                        title='Login'
                    />
                </View>
                <View style={styles.form_container}>
                    <Text>Forgot password?</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default app;