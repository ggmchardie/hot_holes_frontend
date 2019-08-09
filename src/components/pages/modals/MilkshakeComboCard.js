import React, { Component } from "react";
import { render } from "react-dom";
import Modal from "react-responsive-modal";
import { Col, Card, Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { addOrder } from "../../../actions/OrderAction";
import PropTypes from "prop-types";


class MilkshakeComboCard extends Component {
  state = {
    open: false,
    items: "",
    name: "",
    phone: ""
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onChange = (e) => {
    this.setState({ items: e.target.value});
    
  }

  onInputChange = (e) => {
    this.setState({ name: e.target.value });
    this.setState({ phone: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();


    const newOrder = {
      items: this.state.items,
      name: this.state.name,
      phone: this.state.phone

    }

    this.props.addOrder(newOrder);
    
    alert("Your item has been added to your order");
  }

  render() {
    const { open } = this.state;
    const { order } = this.props.order;
    return (
      <div>
      
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.imgur.com/R1C1oM9.jpg" />
              <Card.Body>

                <Card.Title>Milkshake Combo</Card.Title>
                  <Card.Text>
                    2 x doughnuts of your choice and a milkshake.
                  </Card.Text>
                  
                  <Button onClick={this.onOpenModal} >Order</Button>
              </Card.Body>
            </Card>

            <Modal open={open} onClose={this.onCloseModal}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://i.imgur.com/R1C1oM9.jpg" />
                    <Card.Body>
                      <Card.Title>Milkshake Combo - $6.50</Card.Title>
                        <Card.Text>
                            2 x doughnuts of your choice and a milkshake.
                        </Card.Text>                    

                        <Form onSubmit={this.onSubmit} >
                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label for="order">Quantity</Form.Label>
                            
                              <Form.Control as="select" name="order" onChange={this.onChange}>
                                <option  name="items"  value="Milkshake Combo - $6.50" >Milkshake Combo - $6.50</option>
                            
                              </Form.Control>

                              <Form.Label for="name">Name</Form.Label>
                              <Form.Control name="name" placeholder="Name" value={this.state.name} onChange={this.onInputChange}>
                              </Form.Control>
                              <Form.Label for="phone" >Phone</Form.Label>
                              <Form.Control name="phone" placeholder="Phone" value={this.state.phone} onChange={this.onInputChange}></Form.Control>
                              <input className="ui green button" type="submit" value="Submit" />
                          

                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal>

              

      </div>
    );
  }
}

MilkshakeComboCard.propTypes = {
  getOrders: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  order: state.order
});

export default connect(mapStateToProps, { addOrder } )(MilkshakeComboCard);


                        

                               




                        




                        

                               




                        

