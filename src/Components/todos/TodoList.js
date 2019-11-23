import React, {Component} from 'react';
import TodoTask from "./TodoTask";
import {getAllTodos} from "../../utils/APIUtils";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

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
            <div style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: '40%', marginRight: '40%'}}>
                <h2 style={{background: 'white', padding: '20px', marginLeft: '50px', marginRight: '50px', marginTop: '10px', width: '250 px', boxShadow: '5px 2px 20px 5px'}}>To do list:</h2>
                <ListGroup style={{boxShadow: '5px 2px 20px 5px', borderRadius: '25px'}}>
                    {this.state.todos.map((item, i) =>
                        <ListGroupItem key={i}>
                            {item.description}
                            <input type="checkbox" onChange={this.onToggle.bind(this, i)}
                                   style={{justifyContent: 'center', alignItems: 'center', margin: '10px'}}/>
                        </ListGroupItem>
                    )}
                </ListGroup>
                <br/>
                <Button onClick={this.showState}>Save</Button>
            </div>
        )
    }
}
