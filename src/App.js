import React, {Component} from 'react';
import './App.css';
import TopBar from "./Components/topbar/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./Components/todos/TodoList";
import {Container} from "react-bootstrap";
import LoginPage from "./Components/login/LoginPage";
import InvestmentList from "./Components/shared/InvestmentList";

class App extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Container fluid style={{margin: "0", padding: "0"}}>
                    <BrowserRouter>
                        <Route exact path={"/"}>
                            <LoginPage/>
                        </Route>
                        <Route exact path={"/houses"} >
                            <InvestmentList/>
                        </Route>
                        <Route path="/investment/:t">
                            <TodoList/>
                        </Route>
                    </BrowserRouter>
                </Container>
            </div>
        );
    }
}

export default App;

