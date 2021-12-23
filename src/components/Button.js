import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('window').width;


const Button = ({text, onPress, type}) => {
    return(
        <TouchableOpacity 
            onPress={onPress}
            >
            <View style={styles.btnContainerStyle}>
                <Text style={styles.btnTextStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainerStyle: {
        alignItems: 'center',
        backgroundColor : "#538FFB",
        paddingVertical: 8,
        width: width / 2.5,
        borderRadius: 50,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    btnTextStyle: {
        fontSize: 16,
        color: '#e9e9e9',
        letterSpacing: 1,
        fontFamily: 'Quicksand-Medium',
        textTransform: 'uppercase'
    }
})

export default Button;