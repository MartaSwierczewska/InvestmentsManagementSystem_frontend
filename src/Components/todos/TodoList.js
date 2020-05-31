import React, {Component} from 'react';
import {downloadDocument, getTodosHouse, sendUpdatedTodos, uploadFileToServer} from "../../utils/APIUtils";
import {MDBInput} from "mdbreact";
import Background from "../../assets/background.jpg";
import Button from "react-bootstrap/Button";
import {Container, ListGroup} from "react-bootstrap";
import CreateTodoContent from "../contents/CreateTodoContent";
import CreateButton from "../shared/CreateButton";
import {white} from "material-ui";

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.investmentId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        this.sendJsonTodos = this.sendJsonTodos.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleDownloadFile = this.handleDownloadFile.bind(this);
    }

    componentDidMount() {
        getTodosHouse(this.investmentId)
            .then((result) => {
                var listTodos = result.map((item) => {
                    console.log(item)
                    return {
                        id: item.id,
                        description: item.todo.description,
                        completed: item.completed,
                        documentName: item.document.name
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

    handleUploadFile(id,event) {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');

        console.log(data);
        uploadFileToServer(id, data)
            .then((response) => {
                alert("Dodano plik");
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


    handleDownloadFile(id) {
        console.log("pobieranie")

        downloadDocument(id)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            });
    }

    //-----------------------------------------------------------

    render() {
        return (
            <div className={"backgroundTODO"} style={{
                backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover'
            }}>
                <Container className={"shadow-box-example z-depth-5"} style={{marginTop: '30px', height: '90vh'}}>
                    <CreateButton name={"Dodaj czynnosc"} body={<CreateTodoContent/>}/>
                    <ListGroup style={{width: "30rem", position: 'relative', left: '31%', 'padding-top':'100px'}}>
                        {console.log(this.state.todos)}
                        {this.state.todos.map((item, i) =>
                            <ListGroup.Item key={i} style={{padding: '20px'}}>
                                <div>
                                    <h4 style={{'display': 'inline'}}>{item.description}</h4>
                                    <MDBInput type="checkbox" onChange={this.onToggle.bind(this, i)}
                                              style={{display: 'inline', bottom: '0px', right: '-180px'}}
                                              checked={item.completed}/>
                                </div>

                                <button onClick={this.handleDownloadFile.bind(this,i+1)}>
                                    <i className="fas fa-file-download"/>{' '+item.documentName}</button>

                                <input style={{marginTop: '15px', width: '250px'}} type="file" className="form-control"
                                       name="file" onChange={(e) => this.handleUploadFile(item.id, e)}/>

                            </ListGroup.Item>
                        )}
                    </ListGroup>
                    <br/>
                    <Button variant={"elegant"} style={{position: 'relative', left: '47%'}}
                            onClick={this.sendJsonTodos}>Wyślij</Button>
                </Container>
            </div>
        )
    }
}
