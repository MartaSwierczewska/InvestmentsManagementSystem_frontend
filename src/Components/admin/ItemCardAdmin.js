import React from "react";
import Card from "react-bootstrap/Card";
import Button from "@material-ui/core/Button";
import {deleteInvestment} from "../../utils/APIUtils";

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            name:props.name,
            description: props.description,
            image:props.image,
            buttonTextEdit: props.buttonTextEdit,
            buttonTextDelete: props.buttonTextDelete,
            button_url:'admin/edit/'+props.id
        };
    }

    deleteHandler(id){
        deleteInvestment(id)
            .then(response => {
                alert("Usunięto inwestycję o id: "+this.state.id);
                window.location.reload();
            }).catch(function(error){
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
    }

    render() {
        return (
            <Card style={{minWidth:"200px"}}>
                <Card.Header as={"h5"}>{this.state.title}</Card.Header>
                <Card.Img className="houseImg" variant="top" src={this.state.image} />
                <Card.Body>
                    <div className="clearfix hidden-lg-up">
                        <Card.Text>{this.state.text}</Card.Text>
                    </div>
                </Card.Body>
                <Button className={"button-card"} href={this.state.button_url}>{this.state.buttonTextEdit}</Button>
                <Button className={"button-card"} onClick={()=>this.deleteHandler(this.state.id)}>{this.state.buttonTextDelete}</Button>
            </Card>
        );
    }
}