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
    const style = {
      width: '60%',
      backgroundColor: '#99ccff',
      margin: 'auto',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '16px',
      textAlign: 'center',
    }
    return (
      <div className="App">
        <UserInput change={this.changeUserName} switchDef={this.switchBackToDefault}/>
        <UserOutput style={style} userName={this.state.userName} />
      </div>
    )
  }
}

export default App;
