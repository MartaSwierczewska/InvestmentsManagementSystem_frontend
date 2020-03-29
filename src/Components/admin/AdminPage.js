import React from "react";
import {getAllHouses, getAllTodos, getImage} from "../../utils/APIUtils";
import ItemCardAdmin from "./ItemCardAdmin";
import Background from "../../assets/background.jpg";
import CardDeck from "react-bootstrap/CardDeck";
import Popup from "reactjs-popup";
import AddNewInvestmentPage from "./AddNewInvestmentPage";
import Button from "react-bootstrap/Button";
import {Badge, Col, Container, Jumbotron, Modal, Row} from "react-bootstrap";
import SectionTitle from "../section/SectionTitle";
import {PRIMARY_COLOR} from "../../utils/Const";

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            investments: [],
            todos: [],
            isModal: false
        };
    }

    componentDidMount() {
        getAllHouses()
            .then((result) => {
                let i = 0;
                let cards = result.map((item) =>
                    <ItemCardAdmin key={i++} id={item.id} title={item.nameToShow} name={item.name}
                                   description={item.description}
                                   image={getImage(item.name)} buttonTextEdit={"Edit"} buttonTextDelete={"Delete"}/>
                );
                this.setState({investments: cards});
            });
        getAllTodos()
            .then((result) => {
                var listTodos = result.map((todo) => {
                    return {
                        id: todo.id,
                        text: todo.text,
                    };
                });
                this.setState({todos: listTodos});
            });
    }

    modal() {
        return <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    }

    render() {
        return (
            <Container fluid className={"background"}
                       style={{margin: "0", padding: "0", minHeight: "1000px"}}>

                <Container style={{paddingTop:"10px", border:"solid", borderColor:PRIMARY_COLOR}}>
                    <Row>
                        <Col className={"text-center"}>
                            <SectionTitle name={"Investments"}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardDeck>
                                {this.state.investments}
                            </CardDeck>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant={"light"} onClick={() => this.setState({isModal: true})}>Add new
                                investment</Button>
                        </Col>
                    </Row>

                </Container>

                <Modal show={this.state.isModal} onHide={() => {
                    this.setState({isModal: false})
                    window.location.reload()
                }}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            New Investment
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewInvestmentPage/>
                    </Modal.Body>
                </Modal>

                <Container>
                    <Row>
                        <Col className={"text-center"}>
                            <SectionTitle name={"Activities"}/>
                        </Col>
                    </Row>
                    <ul>
                        {/* todo !!!!!!! tu nie wiem jak dodac usuwanie i edycje w mapowaniu, moze trzeba uzyc todo task*/}
                        {this.state.todos.map((item) =>
                            <li key={item.id}>{item.text}</li>)}
                    </ul>
                    <Button variant="light" href={"/admin/newTodo"}>Dodaj domyślne czynności</Button>

                </Container>

            </Container>

        )
    }
}