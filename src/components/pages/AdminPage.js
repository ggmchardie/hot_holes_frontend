import React, { Component } from "react";
import { Jumbotron, Form, Button, Container, Row } from "react-bootstrap";

class AdminPage extends Component {
    render() {
        return (
            <div>
                
                <Container >
                    
                    <Jumbotron className="header" >
                    
                        <h1>Admin Page</h1>


                        <div>
                            <Form>
                                <Form.Group controlId="formBasicEmail" style={{width: '30%'}}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" style={{width: '30%'}}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
            
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    
                    </Jumbotron>
                    
                </Container>
            </div>
        );
    }
}

export default AdminPage;