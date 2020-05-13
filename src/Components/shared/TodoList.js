import React from "react";
import {getAllTodos} from "../../utils/APIUtils";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        getAllTodos()
            .then((result) => {
                var listTodos = result.map((todo) => {
                    console.log(todo)
                    return {
                        id: todo.id,
                        description: todo.description,
                    };
                });
                this.setState({todos: listTodos});
            });
    }

    render() {
        return (
            <ul>
                {this.state.todos.map((item) =>
                    <li key={item.id}>{item.description}</li>)}
            </ul>
        )
    }
}