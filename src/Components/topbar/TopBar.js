import React from 'react'
import {Image, Nav, Navbar} from "react-bootstrap";
import logo from "./logo.png"

export default class TopBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <div>
                        <Image fluid src={logo} alt={"logo"} style={{width: '100px', height: '100px' }}
                               className={"mx-auto navbar-brand"}/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" style={{fontSize:"20px"}}>Home</Nav.Link>
                        <Nav.Link href="/admin">Admin Page</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
    }
}