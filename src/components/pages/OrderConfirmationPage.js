import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


class MyOrderPage extends Component {

    render() {
        return (
            <div>
                <div>
                    
                    <Jumbotron className="header">
                    
                                <div className="row justify-content-center">
                                <h1>Your order has been processed. Your pickup time is:</h1>
                                    
                                <h1>Thank you for your business!</h1>
            
                                </div>
                                
                         
                    
                    </Jumbotron> 
                    
                    
        
                </div>

                
                
            </div>
        );
    }
}

export default MyOrderPage;