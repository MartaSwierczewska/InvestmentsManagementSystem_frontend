import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';
import TopBar from "./Components/topbar/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './assets/background.jpg';

import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./Components/todos/TodoList";
import Chart from './Components/statistics/Chart';

class App extends Component {

    render() {
        return (
            <div>
                <TopBar/>
                <BrowserRouter>
                    <Route exact path={"/"}>
                        <House/>
                    </Route>
                    <Route path="/house:t">
                        <TodoList />
                    </Route>
                    <div className={"statisticsBackground"}>
                        <Route path="/statistics">
                            <Chart/>
                        </Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;