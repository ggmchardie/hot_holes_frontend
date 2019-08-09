import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Container, Row, Jumbotron } from "react-bootstrap";
import {Link} from "react-router-dom";


class BottomNav extends Component {
    render() {
        return(
            <div>
                <>

                <Container>
                    <Navbar variant="dark">
    
                    <Nav className="flex-column">
                        <Nav.Link href="#top" style={{ color: 'red'}}>Back to top</Nav.Link>

                        <Nav.Link>
                            <Link to="/about" style={{ color: 'red'}}>
                                About Us
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                        <Link to="/order" style={{ color: 'red'}}>
                            Order
                        </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/contact" style={{ color: 'red'}}>
                                Contact Us
                            </Link>
                        </Nav.Link>
                    </Nav>
                        

                        </Navbar>
                    </Container>
                    </>
                </div>
        );
    }
}

export default BottomNav;