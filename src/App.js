import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';

class App extends Component {
  render() {
    return (
        <div className={"App"}>
            <House/>
        </div>
    );
  }
}

export default App;