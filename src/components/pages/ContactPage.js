import React, { Component } from "react";
import { Jumbotron, Container, Form, Row, Button } from "react-bootstrap";

class ContactPage extends Component {
    render() {
        return (
            <div>
                <div>
                    
                    <Container>
                        <Jumbotron className="header">

                            <Row>
                            <h1>Contact Us</h1>
                            </Row>

                            <div>
                                <Form>

                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="name" placeholder="John" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="name" placeholder="Smith" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="johnsmith@smith.com" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control type="number" placeholder="0404040404" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Preferred contact method</Form.Label>
                                        <Form.Control as="select">
                                        <option>Phone</option>
                                        <option>Email</option>
                                        </Form.Control>
                                    </Form.Group>
                                   
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                </Form>
                            </div>

                            <Button>
                                Submit
                            </Button>
                            

                
                        
                        </Jumbotron>
                    </Container> 
                    
                </div>
            </div>
        );
    }
}

export default ContactPage;