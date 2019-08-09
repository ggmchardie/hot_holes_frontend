import React, { Component } from "react";
import { Container, Col, Card, Button, Row, Jumbotron, Form } from 'react-bootstrap';
import CinnamonCard from "./modals/CinnamonCard";
import JamCard from "./modals/JamCard";
import CoffeeCard from "./modals/CoffeeCard";
import MilkshakeCard from "./modals/MilkshakeCard";
import CoffeeComboCard from "./modals/CoffeeComboCard";
import MilkshakeComboCard from "./modals/MilkshakeComboCard";

class OrderPage extends Component {
    render() {
        return (
            <div>
                <Container className="order-title">
             
                
            
                </Container>

                <div>
            <Container>
                <Jumbotron className="header">

                <Row>
                    <Col>
                    <h1>Order online</h1>
                    </Col>

                </Row>
                <Row>
                    <Col>
                    <div>
                        <p>
                            All our delicious donuts are fresh and home made!
                        </p>
                        <p>
                            Order online and have your donuts waiting for you when you arrive!
                        </p>
                        <p>
                            Please note: 
                            Our business is cashless so online order or eftpos are our only payment options
                        </p>
                    </div>
                    </Col>
                </Row>

                <Row className="justify-content-md" style={{padding: '2%'}}>

                    <Col xs={6} md={4} >
                        <CinnamonCard />
                    </Col>

                    <Col>
                        <JamCard />
                    </Col>

                    <Col xs={6} md={4} >
                        <CoffeeCard />
                    </Col>


                    <Col xs={6} md={4} >
                        <MilkshakeCard />
                    </Col>

                    <Col xs={6} md={4}>
                        <CoffeeComboCard />
                    </Col>

                    <Col>
                        <MilkshakeComboCard />
                    </Col>

                </Row>
            </Jumbotron>
            </Container>
            </div>

            </div>
        );
    }
}

export default OrderPage;