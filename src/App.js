import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    userName: 'Jamie'
  };

  switchBackToDefault = () => {
    this.setState( {
      userName: 'Jamie'
    } );
  };

  changeUserName = (event) => {
    this.setState( {
      userName: event.target.value
    } );
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeUserName} switchDef={this.switchBackToDefault}/>
        <UserOutput userName={this.state.userName} />
      </div>
    )
  }
}

export default App;
