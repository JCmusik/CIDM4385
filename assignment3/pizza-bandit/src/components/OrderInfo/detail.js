import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { GetOrders } from '../../Services/DB';
import DetailItem from './detailItem';

let component_name = "Detail";


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

                results.forEach((item) => {
                    console.log(component_name, item.id);
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
            <table className="table container table-striped bg-secondary text-white detail">
                <thead>
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
        )
    }
}

export default Detail;