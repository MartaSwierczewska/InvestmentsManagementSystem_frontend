import React from "react";
import {getAllHouses, getImage} from "../../utils/APIUtils";
import ItemCardAdmin from "./ItemCardAdmin";
import Background from "../../assets/background.jpg";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "@material-ui/core/Button";

export default class AdminPage extends React.Component {
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
                    <ItemCardAdmin key={i++} id={item.id} title={item.nameToShow} name={item.name} description={item.description}
                              image={getImage(item.name)} buttonTextEdit={"Edit"} buttonTextDelete={"Delete"}/>
                );
                this.setState({cards: cards});
            });
    }

    render() {
        return (
            <div className={"background"} style={{backgroundImage: `url(${Background})`}}>
                <CardDeck>
                    {this.state.cards}
                </CardDeck>
                <Button href={"/admin/newInvestment"}>Dodaj inwestycję</Button>
            </div>
        )
    }
}