import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {TEXT_CENTER} from "../../utils/Const";
import SectionTitle from "../shared/section/SectionTitle";
import CreateButton from "./CreateButton";

export default class AdminPage extends React.Component {
    render() {
        return (
            <Container>
                <Container style={this.props.givenStyle}>
                    <Row>
                        <Col className={TEXT_CENTER}>
                            <SectionTitle name={this.props.sectionTitle}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.props.list}
                        </Col>
                    </Row>
                    <Row>
                        <Col className={TEXT_CENTER}>
                            <CreateButton name={this.props.buttonName} body={this.props.buttonBody}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
