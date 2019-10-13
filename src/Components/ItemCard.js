import React from "react";
import Card from "react-bootstrap/Card";
import Button from "@material-ui/core/Button";

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            image:props.image,
            url:props.url,
            buttonText: props.buttonText
        };
    }

    render() {
        return (
            <Card>
                <Card.Header as={"h5"}>{this.state.title}</Card.Header>
                <Card.Img variant="top" src={this.state.image}/>
                <Card.Body>
                    <div className="clearfix hidden-lg-up">
                        <Card.Text>{this.state.text}</Card.Text>
                    </div>

                </Card.Body>
                <Button className={"button-card"} href={this.state.url}>{this.state.buttonText}</Button>
            </Card>
        );
    }
}