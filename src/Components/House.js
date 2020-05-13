import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import {getAllHouses, getImage} from "../utils/APIUtils";
import Background from "../assets/background.jpg";

export default class House extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        getAllHouses()
            .then((result) => {
                let i = 0;
                let cards = result.map((item) =>
                    <ItemCardAdmin key={i++} id={item.id} title={item.nameToShow} name={item.name}
                                   description={item.description}
                                   image={getImage(item.name)} url="item.name" buttonText={"See investment"}/>
                );
                this.setState({cards: cards});
            });

    }

    render() {
        return (
            <CardDeck>
                {this.state.cards}
            </CardDeck>
        )
    }
}