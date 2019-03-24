import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { GetOrders } from '../../Services/DB';

let component_name = "Detail";


class Detail extends Component {
    state = {
        order: []
    }

    componentWillMount = () => {
        let ordersInquiry = {
            email: this.props.email,
            //by passing this method into the firebase method, we will use it to
            //receive data from the firebase cloud firestore
            callback: (docs) => {

                let results = []

                docs.forEach((doc) => {

                    const { date, email, price, item, vendor } = doc.data();

                    let orderItem = {
                        date: date,
                        email: email,
                        item: item,
                        price: price,
                        vendor: vendor,
                    }

                    results.push(orderItem);
                });

                results.forEach((item) => {
                    console.log(component_name, item.id, " => ", item.email);
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
        const { order } = this.state;
        if (user) { return <Redirect to="/" /> };
        return (
            <table className="table container table-striped bg-secondary text-white detail">
                <thead>
                    <tr>
                        <th>Item:</th>
                        <th>Price:</th>
                        <th>Vendor:</th>
                        <th>Date:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Detail;