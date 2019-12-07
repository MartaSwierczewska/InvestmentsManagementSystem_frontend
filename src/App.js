import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';
import TopBar from "./Components/topbar/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './assets/background.jpg';
import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./Components/todos/TodoList";

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
                </BrowserRouter>
            </div>
        );
    }
}

export default App;