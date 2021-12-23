import React , {Component} from 'react';
import {View, TextInput} from 'react-native';


class CatForm extends Component{
    render(){
        return(
            <View style={{padding: 9}}>
                <TextInput 
                    style={{height: 40}}
                    placeholder="Enter your name" />
            </View>
        )
    }
}

export default CatForm;