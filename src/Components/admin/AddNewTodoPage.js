import React from "react";
import Button from "@material-ui/core/Button";
import {sendCreatedTodo} from "../../utils/APIUtils";

export default class AddNewTodoPage extends React.Component{
    constructor(props) {
        super(props);
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
        event.preventDefault();
        sendCreatedTodo(this.state)
            .then(response => {
                alert("Dodano todo: "+this.state.text);
                window.location.reload();
            }).catch(function(error){
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Text:
                        <input type="text" name={'text'} onChange={this.handleChange} />
                    </label>
                    <label>
                        Completed:
                        <input type="text" name={'completed'} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
                <Button href={"/admin"}>Powrót do panelu admina</Button>
            </div>

        );
    }
}

