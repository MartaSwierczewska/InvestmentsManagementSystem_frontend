import React, {Component} from 'react';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.completed ? 'completed' : ''}>{props.todo.description}</td>
    </tr>
)

const Checkbox = props => (
    <input type="checkbox" {...props} />
)
export default class TodoList extends Component {

    state = {checked: false}
    handleCheckboxChange = event =>
        this.setState({checked: event.target.checked})


    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/todos')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i}/>;
        })
    }

    render() {
        return (
            <div className={"mx-4 flex-fill"}>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
