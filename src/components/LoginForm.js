import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet,  Linking} from 'react-native';
import Button from './Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 75,
        backgroundColor: "#FD297A"
    },
    innerContainer: {
        backgroundColor: '#DB0B5F',
        paddingHorizontal: 20,
        paddingTop: 75,
        paddingBottom: 75,
        borderTopEndRadius: 100,
        borderBottomEndRadius: 100
    },
    loginTitle: {
        textAlign: "center",
        fontSize: 30,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5,
        fontWeight: 700,
        color: '#fff'
    },
    inputFields: {
        marginTop: 20,
    },
    inputField: {
        marginBottom: 20,
        borderColor: '#fff',
        borderWidth: 0.7,
        lineHeight: 40,
        borderRadius: 18,
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#ffffff',
        
    },
    btnButton: {
        alignItems: 'center',
        marginTop: 16
    },
    btn: {
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: "#D31A50"
    },
    forgotText: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})

const LoginForm = () => {

    const onPress = () => {
        alert('clicked');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.loginTitle}>Login</Text>
                </View>
                <View style={styles.inputFields}>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Enter your email" />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Enter password" />
                </View>
                <View style={styles.btnButton}>
                    <Button 
                        text="Login"
                        onPress={onPress}
                        type="outlined" />
                </View>
                <View style={styles.forgotText}>
                    <Text onPress={() => Linking.openURL('https://google.com')}>Forgot Password ?</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default LoginForm;