import React from "react";
import {CardDeck} from "react-bootstrap";
import {getAllHouses, getImage} from "../../utils/APIUtils";
import ItemCardAdmin from "../admin/ItemCardAdmin";
import Background from "../../assets/background.jpg";
import CreateInvestmentContent from "../admin/investment/CreateInvestmentContent";
import CreateButton from "../admin/CreateButton";

export default class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            investments: []
        }
    }

    componentDidMount() {
        getAllHouses()
            .then((result) => {
                let i = 0;
                let cards = result.map((item) =>
                    <ItemCardAdmin key={i++} id={item.id} title={item.nameToShow} name={item.name}
                                   description={item.description}
                                   image={getImage(item.fileNamePath)} buttonTextEdit={"Wyświetl"}
                                   buttonTextDelete={"Usuń"}/>
                );
                this.setState({investments: cards});
            });
    }

    render() {
        return (
            <div className={"background"} style={{backgroundImage: `url(${Background})`, height: '85vh'}}>
                <CreateButton name={"Dodaj inwestycję"} body={<CreateInvestmentContent/>}/>
                <CardDeck>
                    {this.state.investments}
                </CardDeck>
            </div>
        )
    }
}