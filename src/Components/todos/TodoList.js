import React, {Component} from 'react';
import {getTodosHouse} from "../../utils/APIUtils";
import {MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn, MDBInput} from "mdbreact";

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.houseName = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        this.showState = this.showState.bind(this);
        this.sendJsonTodos=this.sendJsonTodos.bind(this);
    }

    componentDidMount() {
        getTodosHouse(this.houseName)
            .then((result) => {
                var listTodos = result.map((houseData)=>{
                    var todo = {id:houseData.id,description:houseData.todo.description, completed:houseData.completed};
                    return todo;
                })
                this.setState({todos:listTodos});
                console.log(listTodos);
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

    sendJsonTodos(){
        fetch('http://localhost:8080/'+this.houseName, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.todos)
        })
    }

    onFileChangeHandler = (id, e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);

        fetch('http://localhost:8080/'+this.houseName+'/'+id, {
            method: 'POST',
            body: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });

    };

    downloadFile(id) {
        fetch('http://localhost:8080/'+this.houseName+'/'+id)
            .then(response => {

                const filename =  response.headers.get("documentName");
                console.log(filename);
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
            <MDBContainer className={"shadow-box-example z-depth-5"} style={{marginTop:'30px'}}>
                <h1 style={{margin: '10px', textAlign: 'center'}}>To do list:</h1>
                <MDBListGroup style={{ width: "22rem", position: 'relative', left:'34%'}}>
                    {this.state.todos.map((item, i) =>
                        <MDBListGroupItem key={i} style={{padding: '20px'}}>
                            {item.description}
                            <MDBInput type="checkbox" onChange={this.onToggle.bind(this, i)} style={{display: 'inline', bottom: '0px', right: '-120px'}} checked={item.completed}/>

                            <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler.bind(this, item.id)}/>
                            <button onClick={this.downloadFile.bind(this,item.id)}>Download</button>

                        </MDBListGroupItem>
                    )}
                </MDBListGroup>
                <br/>
                <MDBBtn color='elegant' style={{position: 'relative', left: '45%'}} onClick={this.sendJsonTodos}>Send</MDBBtn>
            </MDBContainer>
        )
    }
}
