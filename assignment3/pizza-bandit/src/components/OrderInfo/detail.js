import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { GetOrders } from '../../Services/DB';
import DetailItem from './detailItem';

class Detail extends Component {
    state = {
        order: []
    }

    componentWillMount = () => {
        let ordersInquiry = {
            email: this.props.email,


            callback: (docs) => {

                let results = []

                docs.forEach((doc) => {

                    const { date, email, price, item, vendor } = doc.data();

                    let orderItem = {
                        id: doc.id,
                        date: date,
                        email: email,
                        item: item,
                        price: price,
                        vendor: vendor,
                    }

                    results.push(orderItem);
                });

                this.setState({
                    order: results
                });

            }
        }

        GetOrders(ordersInquiry);
    }


    render() {
        const { user } = this.props;
        if (user) { return <Redirect to="/" /> };
        return (
            <div className="container">
                <table className="table bg-secondary text-white detail">
                    <thead className="thead-dark ">
                        <tr className="text-center">
                            <th colSpan="4">Orders</th>
                            <th><button className="btn btn-warning float-right"><Link to="/" >Home</Link></button></th>
                        </tr>
                        <tr>
                            <th>Item:</th>
                            <th>Price:</th>
                            <th>Vendor:</th>
                            <th>Date:</th>
                            <th>Time:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.order.map((order) =>
                            <DetailItem
                                key={order.id}
                                order={order}
                            />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Detail;