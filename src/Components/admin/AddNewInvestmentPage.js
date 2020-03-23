import React from "react";
import {sendCreatedInvestment} from "../../utils/APIUtils";
import Button from "@material-ui/core/Button";


export default class AddNewInvestmentPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: '', nameToShow:'', description:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
               alert("Dodano inwestycję: "+this.state.name);
               window.location.reload();
            }).catch(function(error){
                console.log('There has been a problem with your fetch operation: ', error.message);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name={'name'} onChange={this.handleChange} />
                    </label>
                    <label>
                        NameToShow:
                        <input type="text" name={'nameToShow'} onChange={this.handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" name={'description'} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
                <Button href={"/admin"}>Powrót do panelu admina</Button>
            </div>

        );
    }
}

