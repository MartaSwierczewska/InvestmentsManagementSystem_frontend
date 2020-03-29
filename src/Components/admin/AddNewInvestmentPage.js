import React from "react";
import {sendCreatedInvestment} from "../../utils/APIUtils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Alert, ButtonToolbar} from "react-bootstrap";

export default class AddNewInvestmentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', nameToShow: '', description: '', isSuccessfullySaved: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };
    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        sendCreatedInvestment(this.state)
            .then(response => {
                this.setState({isSuccessfullySaved: true});
            }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
    }

    render() {
        return (
            <div>
                <Form style={{margin: "10px"}}>
                    <Form.Row>
                        <Form.Group controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name={'name'} placeholder="Enter name" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formGridNameToShow">
                            <Form.Label>NameToShow</Form.Label>
                            <Form.Control name={'nameToShow'} placeholder="Enter name to show"
                                          onChange={this.handleChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name={'description'} placeholder="Enter description"
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <ButtonToolbar className="justify-content-between">
                        <ButtonGroup style={{margin: "0"}}>
                            <Button style={{marginLeft: "0"}} variant="outline-primary" onClick={this.handleSubmit}>
                                Save
                            </Button>
                        </ButtonGroup>

                        {this.state.isSuccessfullySaved && <ButtonGroup style={{margin: "0"}}>
                            <Alert variant={"success"}>
                                Success!
                            </Alert>
                        </ButtonGroup>}

                        <ButtonGroup>
                            <Button style={{marginRight: "0"}} variant="outline-primary" onClick={() => {
                                this.props.close();
                                window.location.reload()
                            }}>
                                Back
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Form>
            </div>

        );
    }
}

