import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';
import TopBar from "./Components/topbar/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './assets/background.jpg';

class App extends Component {
  render() {
    return (
        <div className={"background"} style={{backgroundImage: `url(${Background})`}}>
            <TopBar/>
            <House/>
        </div>
    );
  }
}

export default App;