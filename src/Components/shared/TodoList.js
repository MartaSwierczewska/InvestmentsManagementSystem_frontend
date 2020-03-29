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
                    return {
                        id: todo.id,
                        text: todo.text,
                    };
                });
                this.setState({todos: listTodos});
            });
    }

    render() {
        return (
            <ul>
                {/* todo !!!!!!! tu nie wiem jak dodac usuwanie i edycje w mapowaniu, moze trzeba uzyc todo task*/}
                {this.state.todos.map((item) =>
                    <li key={item.id}>{item.text}</li>)}
            </ul>
        )
    }
}