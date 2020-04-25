import React, {Component} from 'react';
import {getTodosHouse} from "../../../utils/APIUtils";
import TodoList from "../../todos/TodoList";
import Button from "@material-ui/core/Button";
import CreateButton from "../CreateButton";
import CreateTodoContent from "../todo/CreateTodoContent";

export default class EditInvestment extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.investmentId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    }

    componentDidMount() {
        getTodosHouse(this.investmentId)
            .then((result) => {
                var listTodos = result.map((item) => {
                    console.log(item)

                    return {
                        text:item.text,
                        completed:item.completed
                    };
                });
                this.setState({todos: listTodos});
            });
    }

    render() {
        return (
            <div>
                <TodoList/>
                <CreateButton name={"Dodaj czynnosc"} body={<CreateTodoContent/>}/>
            </div>
        )
    }
}
