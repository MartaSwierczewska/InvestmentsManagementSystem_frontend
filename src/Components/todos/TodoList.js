import React, {Component} from 'react';
import {getTodosHouse, getDocumentNames} from "../../utils/APIUtils";
import {MDBBtn, MDBContainer, MDBInput, MDBListGroup, MDBListGroupItem} from "mdbreact";

import axios from 'axios';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.houseName = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        this.sendJsonTodos = this.sendJsonTodos.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
    }

    componentDidMount() {
        getTodosHouse(this.houseName)
            .then((result) => {
                var listTodos = result.map((houseData) => {
                    return {
                        idGeneral: houseData.id,
                        idTodo: houseData.todo.id,
                        description: houseData.todo.description,
                        completed: houseData.completed,
                        documentName: houseData.document.name
                    };
                });
                this.setState({todos: listTodos});
            });
    }

    onToggle(index) {
        let newItems = this.state.todos.slice();
        newItems[index].completed = !newItems[index].completed
        this.setState({
            todos: newItems
        })
    }

    sendJsonTodos() {
        fetch('http://localhost:8080/' + this.houseName, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.todos)
        })
    }

    getRestClient() {
        if (!this.serviceInstance) {
            this.serviceInstance = axios.create({
                baseURL: 'http://localhost:8080/',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        }
        return this.serviceInstance;
    }

    uploadFileToServer(id, data) {
        return this.getRestClient().post(this.houseName + '/' + id, data);
    }

    handleUploadFile = (id, event) => {
        const data = new FormData();

        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');

        this.uploadFileToServer(id, data).then((response) => {
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });
    };


    downloadFile(id) {
        fetch('http://localhost:8080/' + this.houseName + '/' + id)
            .then(response => {
                const filename = this.state.todos[id%4-1].documentName;
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    a.click();
                });
            });
    }

    render() {
        return (
            <MDBContainer className={"shadow-box-example z-depth-5"} style={{marginTop: '30px'}}>
                <h1 style={{margin: '10px', textAlign: 'center'}}>To do list:</h1>
                <MDBListGroup style={{width: "22rem", position: 'relative', left: '34%'}}>
                    {this.state.todos.map((item, i) =>
                        <MDBListGroupItem key={i} style={{padding: '20px'}}>
                            <h4>{item.description}</h4>
                            <MDBInput type="checkbox" onChange={this.onToggle.bind(this, i)}
                                      style={{display: 'inline', bottom: '0px', right: '-120px'}}
                                      checked={item.completed}/>
                            <input type="file" className="form-control" name="file"
                                   onChange={this.handleUploadFile.bind(this, item.idGeneral)}/>
                            <button onClick={this.downloadFile.bind(this, item.idGeneral)}>Download {item.documentName}</button>

                        </MDBListGroupItem>
                    )}
                </MDBListGroup>
                <br/>
                <MDBBtn color='elegant' style={{position: 'relative', left: '45%'}}
                        onClick={this.sendJsonTodos}>Send</MDBBtn>
            </MDBContainer>
        )
    }
}
