import React from "react";
import {sendCreatedInvestment} from "../../../utils/APIUtils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Alert, ButtonToolbar} from "react-bootstrap";

export default class CreateInvestmentContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameToShow: '',
            description: '',
            isSuccessfullySaved: false,
            fileNamePath: '',
            todos: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAllTodos = this.getAllTodos.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };

    handleSubmit(event) {
        event.preventDefault();
        sendCreatedInvestment(this.state)
            .then(response => {
                this.setState({isSuccessfullySaved: true});
            }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
    }

    onChangeHandler(event) {
        this.setState({
            fileNamePath: event.target.files[0].name
        })
    }

    getAllTodos() {
        const content = posts.map((post) =>
            <div key={post.id}>
                <p>{post.description}</p>
            </div>
        );
        return (<div>
            {content}
        </div>)
    }

    render() {
        return (
            <Form style={FormStyle}>
                <Form.Row>
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
                <input type="file" name="file" onChange={this.onChangeHandler}/>

                <div className="flex-container">

                    <div className="flex-child magenta">
                        Flex Column 1
                    </div>

                    <div className="flex-child green">
                        Flex Column 2
                    </div>

                </div>
                {this.getAllTodos()}

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
const posts = [
    {id: 1, description: 'Hello World'},
    {id: 2, description: 'Installation'}
];
const FormStyle = {
    margin: "10px"
};

const ButtonGroupStyle = {
    margin: "0"
};

const ButtonStyle = {
    marginLeft: "0"
};