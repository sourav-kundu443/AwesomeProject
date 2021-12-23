import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Cat extends Component {
  state = {isHungry: true};
  render(){
    return(
      <View>
        <Text>
          I'm {this.props.name}, and I am {this.state.isHungry ? 'very hungry.' : 'full!'}
        </Text>
        <Button 
          onPress={() =>{
            this.setState({isHungry: false})
          }}
          disabled={!this.state.isHungry}
          title={this.state.isHungry ? 'Pour me some milk, Please.' : 'Thank You.'} />
      </View>
    )
  }
}

export default Cat;