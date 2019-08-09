import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom";


class TopNav extends Component {
    render() {
        return(
            <div>
                <>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                
                
                    <Container>
                        
                        

                            <Navbar.Brand>
                                <Link to="/">
                                    <img
                                        src="https://i.imgur.com/oEArE2B.png"
                                        width="100"
                                        height="100"
                                        className="d-inline-block align-top"
                                        alt="Hot hot holes logo"
                                    />
                                </Link>
                            </Navbar.Brand>


                            <Nav className="justify-content-center" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link >
                                        <Link to="/about" style={{ color: 'red'}}>
                                                About Us
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link >
                                        <Link to="/order" style={{ color: 'red'}}>
                                            Order online
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link >
                                        <Link to="/contact" style={{ color: 'red'}}>
                                                Contact Us
                                        </Link>
                                    </Nav.Link >
                                </Nav.Item>

                            </Nav>



                            
                            
                        <Nav>


                            <Nav.Link >
                                <Link to="./admin" style={{ color: 'red'}}>
                                    Admin
                                </Link>
                            </Nav.Link>
                            
                        </Nav>
                    
                        
                    </Container>

                    </Navbar>
                    </>
                </div>
        );
    }
}

export default TopNav;