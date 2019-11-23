import React, {Component} from 'react';
import TodoTask from "./TodoTask";
import {getAllTodos} from "../../utils/APIUtils";

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.showState = this.showState.bind(this);
    }

    componentDidMount() {
        getAllTodos()
            .then((result) => {
                this.setState({todos: result});
            });
    }

    onToggle(index, e) {
        let newItems = this.state.todos.slice();
        newItems[index].completed = !newItems[index].completed
        this.setState({
            todos: newItems
        })
    }

    showState() {
        console.log(this.state.todos);
    }

    render() {
        return (
            <div className={"mx-4 flex-fill"}>
                <ul>
                    {this.state.todos.map((item, i) =>
                        <li key={i}>
                            {item.description}
                            <input type="checkbox" onChange={this.onToggle.bind(this, i)} />
                        </li>
                    )}
                </ul>
                <br/>
                <button onClick={this.showState}>show</button>
            </div>
        )
    }
}
