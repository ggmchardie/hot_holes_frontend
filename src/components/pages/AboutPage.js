import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos/photos";


class AboutPage extends Component {

    render() {
        return (
            <div>
                
                    
                    <Jumbotron className="header">
                    
                                <div className="row justify-content-center">
                                <Container>
                                <h1>About Us</h1>

                                <p>
                                At hot hot holes we focus on the simple pleasure of a simple treat 
                                done well; a good old-fashioned doughnut, fried to perfection, and 
                                coated in our special blend of spices and sugar. 

                                As a small local business we strive to support other local businesses; 
                                all of our doughnut ingredients are locally grown and sourced. Our 
                                coffee is ethically sourced, fairly traded, and locally roasted.
                                </p>
                                </Container>
                                
                         </div>
                    
                    </Jumbotron> 
                    
                
            </div>
        );
    }
}

export default AboutPage;