import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';
import TopBar from "./Components/topbar/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./Components/todos/TodoList";
import Chart from './Components/Chart';
import Chart2 from './Components/todos/Chart2'

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
                        <TodoList/>
                    </Route>
                    <Route path="/statistics">
                        <div className={"statisticsBackground"}>
                            <Chart/>
                            <Chart2/>
                        </div>
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

