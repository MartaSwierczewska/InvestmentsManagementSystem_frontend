import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';
import TopBar from "./Components/topbar/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./Components/todos/TodoList";
import Statistics from "./Components/Statistics";
import {BrowserRouter, Route} from "react-router-dom";
import Chart from './Components/statistics/Chart';

class App extends Component {

    render() {
        return (
            <div>
                <TopBar/>
                <BrowserRouter>
                    <Route exact path={"/"}>
                        <House/>
                        {/*<div style={{width: "35%", float: "left"}}>*/}
                        {/*    <GoogleMap/>*/}
                        {/*</div>*/}
                    </Route>
                    <Route path="/house:t">
                        <TodoList/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route path="/statistics">
                        <div className={"statisticsBackground"}>
                            <Chart/>
                        </div>
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

