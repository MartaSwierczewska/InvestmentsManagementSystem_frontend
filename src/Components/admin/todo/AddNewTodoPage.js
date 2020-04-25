import React from "react";
import Button from "@material-ui/core/Button";
import {sendDefaultTodo, sendSpecificInvestmentTodo} from "../../../utils/APIUtils";

export default class AddNewTodoPage extends React.Component{

    constructor(props) {
        super(props);
        this.todoType=props.todoType;
        this.state = {text: '', completed:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };

    handleSubmit(event) {
        if(this.todoType==="default"){
            event.preventDefault();
            sendDefaultTodo(this.state)
                .then(response => {
                    alert("Dodano domyślne todo: "+this.state.text);
                    window.location.reload();
                }).catch(function(error){
                console.log('There has been a problem with your fetch operation: ', error.message);
            });
        } else{
            event.preventDefault();
            sendSpecificInvestmentTodo(this.state, 1)
                .then(response => {
                    alert("Dodano todo "+this.state.text+" do inwestycji 1");
                    window.location.reload();
                }).catch(function(error){
                console.log('There has been a problem with your fetch operation: ', error.message);
            });

        }
    }

    render() {
        console.log(this.todoType);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Description:
                        <input type="description" name={'description'} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
                <Button href={"/admin"}>Powrót do panelu admina</Button>
            </div>

        );
    }
}

