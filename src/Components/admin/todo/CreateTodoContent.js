import React from "react";
import {sendSpecificInvestmentTodo} from "../../../utils/APIUtils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Alert, ButtonToolbar} from "react-bootstrap";

export default class CreateTodoContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameToShow: '',
            description: '',
            isSuccessfullySaved: false
        };
        this.investmentId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

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
        sendSpecificInvestmentTodo(this.state, this.investmentId)
            .then(response => {
                this.setState({isSuccessfullySaved: true});
            }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
    }

    render() {
        return (
            <Form style={FormStyle}>
                <Form.Group controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name={'description'} placeholder="Enter description"
                                  onChange={this.handleChange}/>
                </Form.Group>
                <ButtonToolbar className="justify-content-between">
                    <ButtonGroup style={ButtonGroupStyle}>
                        <Button style={ButtonStyle} variant="outline-primary" onClick={this.handleSubmit}>
                            Save
                        </Button>
                    </ButtonGroup>

                    {this.state.isSuccessfullySaved && <ButtonGroup style={ButtonGroupStyle}>
                        <Alert variant={"success"}>
                            Success!
                        </Alert>
                    </ButtonGroup>}
                </ButtonToolbar>
            </Form>
        );
    }
}

const FormStyle = {
    margin: "10px"
};

const ButtonGroupStyle = {
    margin: "0"
};

const ButtonStyle = {
    marginLeft:"0"
};