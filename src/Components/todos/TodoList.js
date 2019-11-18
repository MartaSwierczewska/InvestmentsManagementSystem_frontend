import React, {Component} from 'react';
import TodoTask from "./TodoTask";
import {getAllTodos} from "../../utils/APIUtils";

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.showState=this.showState.bind(this);
    }

    componentDidMount() {
        getAllTodos()
            .then((result)=>{
                let i = 0;
                let todos = result.map((item) =>
                    <TodoTask key={i++} description={item.description} completed={item.completed}/>
                );
                this.setState({todos: todos});
                });
    }

    showState(){
        console.log(this.state.todos);
    }

    render() {
        return (
            <div className={"mx-4 flex-fill"}>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>To do</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.todos}
                    </tbody>
                </table>
                <button onClick={this.showState}>show</button>
            </div>
        )
    }
}
