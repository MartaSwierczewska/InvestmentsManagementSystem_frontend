import React from 'react'
import {Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "./logo.png"

export default class TopBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <div>
                        <Image fluid src={logo} alt={"logo"} style={{width: '100px', height: '100px' }}
                               className={"mx-auto navbar-brand"}/>
                    </div>
                    {/*<div className={'mx-6 my-4'}>*/}
                    {/*    <h2 className={'text-center'}>Choose investment, that you want documents from</h2>*/}
                    {/*</div>*/}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="Actions" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="/">Home</NavDropdown.Item>
                            <NavDropdown.Item href="/statistics">Statistics</NavDropdown.Item>
                            <NavDropdown.Item href="/something">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Toggle>
                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                {/*    */}
                {/*</Navbar.Collapse>*/}
            </Navbar>)
    }
}