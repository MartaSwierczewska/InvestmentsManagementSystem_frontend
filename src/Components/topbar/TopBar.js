import React from 'react'
import {Image, Nav, Navbar} from "react-bootstrap";
import logo from "./white-house-svgrepo-com.svg"

export default class TopBar extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant={"dark"} expand="lg">
                <Navbar.Brand>
                    <Image fluid src={logo} alt={"logo"} style={{width: '100px', height: '100px'}}
                           className={"mx-auto navbar-brand"}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" style={{fontSize: "20px"}}>Home</Nav.Link>
                        <Nav.Link href="/admin" style={{fontSize: "20px"}}>Admin Page</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
    }
}