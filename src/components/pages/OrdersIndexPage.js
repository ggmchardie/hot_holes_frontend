import React, { Component } from "react";
import { Jumbotron, Form, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

//TURN BUTTONS INTO MODALS

//Bootstrap template???????

class OrdersIndexPage extends Component {
    render() {
        return (
            <div>
                
                <Container >
                    
                    <Jumbotron className="header" >
                    
                        <h1>All orders</h1>


                        <div>
                            <h1>Current Orders</h1>

                        </div>

                        <div>
                           <Button> 
                               Past orders
                           </Button>
                        </div>

                        <div>
                           <Button>
                               Update Order
                           </Button>
                        </div>

                        <div>
                           <Button>
                               Admin account
                           </Button>
                        </div>
                    

                    </Jumbotron>
                    
                </Container>
            </div>
        );
    }
}

export default OrdersIndexPage;