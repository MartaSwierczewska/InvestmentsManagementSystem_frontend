import React, {Component} from 'react';
import {downloadFile, getTodosHouse, sendUpdatedTodos, uploadFileToServer} from "../../utils/APIUtils";
import {MDBInput} from "mdbreact";
import Background from "../../assets/background.jpg";
import Button from "react-bootstrap/Button";
import {Container, ListGroup} from "react-bootstrap";

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.investmentId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        this.sendJsonTodos = this.sendJsonTodos.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
    }

    componentDidMount() {
        getTodosHouse(this.investmentId)
            .then((result) => {
                var listTodos = result.map((item) => {
                    console.log(item)
                    return {
                        id: item.todo.id,
                        description: item.todo.description,
                        completed: item.completed
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
        sendUpdatedTodos(this.state.todos, this.investmentId)
            .then((response) => {
                alert("Todos sent successfully.");
                window.location.reload();
            }).catch(function (error) {
            console.log(error);
            if (error.response) {
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });
    }

    //------------------------------------------------------------

    handleUploadFile = (idGeneral, event) => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');

        uploadFileToServer(idGeneral, data)
            .then((response) => {
                alert("File uploaded successfully.");
                window.location.reload();
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
        downloadFile(id)
            .then(response => {
                // !!!! to jest taka troche sciema XD
                const filename = this.state.todos[id % 4 - 1].documentName;
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    a.click();
                });
            });
    }

    //-----------------------------------------------------------

    render() {
        return (
            <div className={"backgroundTODO"} style={{backgroundImage: `url(${Background})`}}>
                <Container className={"shadow-box-example z-depth-5"} style={{marginTop: '30px'}}>
                    <h1 style={{paddingTop: '40px', paddingBottom: '10px', textAlign: 'center'}}>To do list:</h1>
                    <ListGroup style={{width: "30rem", position: 'relative', left: '31%'}}>
                        {this.state.todos.map((item, i) =>
                            <ListGroup.Item key={i} style={{padding: '20px'}}>
                                <div>
                                    <h4 style={{'display': 'inline'}}>{item.description}</h4>
                                    <MDBInput type="checkbox" onChange={this.onToggle.bind(this, i)}
                                              style={{display: 'inline', bottom: '0px', right: '-180px'}}
                                              checked={item.completed}/>

                                </div>

                                <button onClick={this.downloadFile.bind(this, item.idGeneral)}>
                                    <i className="fas fa-file-download"/> {item.documentName}</button>

                                <input style={{marginTop: '15px', width: '250px'}} type="file" className="form-control"
                                       name="file"
                                       onChange={this.handleUploadFile.bind(this, item.idGeneral)}/>

                            </ListGroup.Item>
                        )}
                    </ListGroup>
                    <br/>
                    <Button variant={"elegant"} style={{position: 'relative', left: '47%'}}
                            onClick={this.sendJsonTodos}>Send</Button>
                </Container>
            </div>
        )
    }
}
