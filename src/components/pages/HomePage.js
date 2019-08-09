import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos/photos";

const BasicRows = () => <Gallery photos={photos} />;


class HomePage extends Component {

    render() {
        return (
            <div>
                <div>
                    
                    <Jumbotron className="header">
                    
                                <div className="row justify-content-center">
                                
                                <h1>Hot Hot Holes</h1>
                                </div>

                                <div className="row justify-content-center">
                                <p>
                                    Fresh donuts prepared when you order 
                                </p>
            
                                </div>

                                <div className="row justify-content-center">

                                    
                                    

                                </div>
                         
                    
                    </Jumbotron> 
                    
                    
        
                </div>

                <div>
                    <BasicRows />
                </div>
                
            </div>
        );
    }
}

export default HomePage;