import React, { Component } from "react";
import { Container, Button, Table} from 'react-bootstrap';
import { Link } from "react-router-dom";
import CinnamonCard from "./modals/CinnamonCard";
import { connect } from 'react-redux';
import { getOrders, deleteOrder } from "../../actions/OrderAction";
import PropTypes from "prop-types";



class AdminDashboardPage extends Component {

  componentDidMount() {
    this.props.getOrders();
}

onDeleteClick = (id) => {
    this.props.deleteOrder(id);
}

render() {
    const { orders } = this.props.order;
  
    return(


        <div>

            <Container>
              <h1>Orders</h1>

                <Table responsive>
                {orders.map(( order ) => (
                        <>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Items</th>
                    <th>Name</th>
                    <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>#</td>
                    <td>{order.items} </td>
                    <td>{order.name} </td>
                    <td>{order.phone} </td>
                    
                    </tr>
                </tbody>
                </>                         
                    ))};
                </Table>

                <div>
                {orders.map(( order ) => (
                    <>
                    <p>{order.items} </p>
                    <p>{order.name} </p>
                    <p>{order.phone} </p>
                    </>
                    ))};
                </div>

             </Container>   
        </div>

    );
}

}

AdminDashboardPage.propTypes ={
getOrders: PropTypes.func.isRequired,
order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
order: state.order
})

export default connect(mapStateToProps, { getOrders })(AdminDashboardPage);


                        

                               

