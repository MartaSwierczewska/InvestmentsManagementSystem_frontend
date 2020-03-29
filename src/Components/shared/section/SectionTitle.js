import React from "react";
import {Badge} from "react-bootstrap";

export default class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name
        })
    }

    render() {
        return (
            <Badge pill style={BadgeStyle}>
                <h1 style={H1Style}>{this.state.name}</h1>
            </Badge>
        )
    }
}

const BadgeStyle = {
    padding: "15px",
    backgroundColor: "white",
    borderStyle: "solid",
    borderColor: "#4285f4",
    borderWidth: "1px"
};

const H1Style = {fontWeight: 'bold', color: "#4285f4"};
