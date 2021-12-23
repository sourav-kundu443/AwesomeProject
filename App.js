import React, {Component} from 'react';
import Cat from './src/components/Cat';
import CatForm from './src/components/CatForm';
import ScrollViewCmp from './src/components/ScrollViewCmp';
import LoginForm from './src/components/LoginForm';

class App extends Component{
  render(){
    return(
      <>
      {/* <Cat name="Bob" />
      <Cat name="Spot" />
      <CatForm />

      <ScrollViewCmp /> */}

      <LoginForm />
      </>
    )
  }
}

export default App;