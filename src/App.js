import React, {Component} from 'react';
import './App.css';
import House from './Components/House.js';
import TopBar from "./Components/topbar/TopBar";
import AdminPage from "./Components/admin/AdminPage";
import AddNewInvestmentPage from "./Components/admin/AddNewInvestmentPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import TodoList from "./Components/todos/TodoList";
import AddNewTodoPage from "./Components/admin/AddNewTodoPage";
import EditInvestment from "./Components/admin/EditInvestment";

class App extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <BrowserRouter>
                    <Route exact path={"/"}>
                        <House/>
                    </Route>
                    <Route exact path={"/admin"}>
                        <AdminPage/>
                    </Route>
                    <Route path={"/admin/newInvestment"}>
                        <AddNewInvestmentPage/>
                    </Route>
                    <Route path={"/admin/newTodo"}>
                        <AddNewTodoPage todoType={"default"}/>
                    </Route>
                    <Route path={"/admin/:id/newTodo"}>
                        <AddNewTodoPage todoType={"specificInvestment"}/>
                    </Route>
                    <Route path={"/admin/edit/:t"}>
                        <EditInvestment/>
                    </Route>
                    <Route path="/investment/:t">
                        <TodoList/>
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

