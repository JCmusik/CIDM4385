import React, { Component } from 'react';

// let orders = { date, email, item, price, vendor };
class Detail extends Component {
    state = {
        date: '',
        email: '',
        item: 'test',
        price: '',
        vendor: ''
    }

    componentDidMount() {

    }
    render() {
        const { email, item, price, vendor, date } = this.state;
        return (
            <table>
                <th>Email:</th>
                <th>Item:</th>
                <th>Price:</th>
                <th>Vendor:</th>
                <th>Date:</th>
                <tr>
                    <td>{email}</td>
                    <td>{item}</td>
                    <td>{price}</td>
                    <td>{vendor}</td>
                    <td>{date}</td>
                </tr>
            </table>
        )
    }
}

export default Detail;