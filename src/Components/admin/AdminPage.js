import React from "react";
import {getAllHouses, getAllTodos, getImage} from "../../utils/APIUtils";
import ItemCardAdmin from "./ItemCardAdmin";
import Background from "../../assets/background.jpg";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "@material-ui/core/Button";

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            investments: [],
            todos:[]
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
                this.setState({investments: cards});
            });
        getAllTodos()
            .then((result) => {
                var listTodos = result.map((todo) => {
                    return {
                        id:todo.id,
                        text: todo.text,
                    };
                });
                this.setState({todos: listTodos});
            });
    }


    render() {
        return (
            <div className={"background"} style={{backgroundImage: `url(${Background})`}}>
                <h3>Aktualne inwestycje</h3>
                <CardDeck>
                    {this.state.investments}
                </CardDeck>
                <Button href={"/admin/newInvestment"}>Dodaj inwestycję</Button>
                <h3>Domyślnie dodawane czynności:</h3>
                <ul>
                    {/* todo !!!!!!! tu nie wiem jak dodac usuwanie i edycje w mapowaniu, moze trzeba uzyc todo task*/}
                    { this.state.todos.map((item) =>
                        <li key={item.id}>{item.text}</li>)}
                </ul>
                <Button href={"/admin/newTodo"}>Dodaj domyślne czynności</Button>
            </div>
        )
    }
}