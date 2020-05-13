import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';
import TopBar from "./Components/topbar/TopBar";
import AdminPage from "./Components/admin/AdminPage";
import CreateInvestmentContent from "./Components/admin/investment/CreateInvestmentContent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./Components/todos/TodoList";
import AddNewTodoPage from "./Components/admin/todo/AddNewTodoPage";
import EditInvestment from "./Components/admin/investment/EditInvestment";
import {Container} from "react-bootstrap";
import Login from "./Components/login/Login";
import LoginPage from "./Components/login/LoginPage";

class App extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Container fluid style={{margin: "0", padding: "0"}}>
                    <BrowserRouter>
                        <Route exact path={"/"}>
                            <Login/>
                        </Route>
                        <Route exact path={"/houses"}>
                            <House/>
                        </Route>
                        <Route exact path={"/admin"}>
                            <AdminPage/>
                        </Route>
                        <Route path={"/admin/newInvestment"}>
                            <CreateInvestmentContent/>
                        </Route>
                        <Route exact path={"/admin/newTodo"}>
                            <AddNewTodoPage todoType={"default"}/>
                        </Route>
                        <Route path={"/admin/newTodo/:id"}>
                            <AddNewTodoPage todoType={"specificInvestment"}/>
                        </Route>
                        <Route path={"/admin/edit/:t"}>
                            <EditInvestment/>
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

