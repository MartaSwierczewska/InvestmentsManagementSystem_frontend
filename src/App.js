import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';
import TopBar from "./Components/topbar/TopBar";
import Investment from './Components/Investment'
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './assets/background.jpg';
import {BrowserRouter, Route} from "react-router-dom";
import Statistics from "./Components/Statistics";

class App extends Component {
    render() {
        return (
            <div className={"background"} style={{backgroundImage: `url(${Background})`}}>
                <TopBar/>
                <BrowserRouter>
                    <Route exact path={"/"}>
                        <House/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route path="/:nazwa">
                        <Investment/>
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;