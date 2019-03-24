import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { GetOrder } from '../../Services/DB';

// let orders = { date, email, item, price, vendor };
class Detail extends Component {
    state = {
        order: []
    }

    componentWillMount = () => {

        let request = {
            email: this.props.email,
            //by passing this method into the firebase method, we will use it to
            //receive data from the firebase cloud firestore
            callback: (docs) => {

                let results = []

                docs.forEach((doc) => {

                    const { date, email, price, item, vendor } = doc.data();

                    let order = {
                        id: doc.id,
                        date: date,
                        email: email,
                        item: item,
                        price: price,
                        vendor: vendor,
                    }

                    results.push(order);
                });

                results.forEach((item) => {
                    console.log("Detail: ", item.id, " => ", item.email);
                });

                this.setState(
                    {
                        order: results,
                    }
                );
            }
        }

        GetOrder(request);
    }
    render() {
        const { user, userAuth } = this.props;
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
                        {/* <td>{order.email}</td>
                        <td>{order.item}</td>
                        <td>{order.price}</td>
                        <td>{order.vendor.title}</td>
                        <td>{order.date}</td> */}
                        {console.log(this.state.order)}
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Detail;