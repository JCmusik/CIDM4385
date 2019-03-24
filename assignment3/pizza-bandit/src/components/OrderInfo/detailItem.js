import React from 'react';

const DetailItem = (props) => {

    const { date, item, price, vendor } = props.order;

    let datestring = new Date(date.seconds * 1000).toLocaleDateString();
    let timestring = new Date(date.seconds * 1000).toLocaleTimeString();

    return (
        <tr>
            <td>{item}</td>
            <td>${price}</td>
            <td>{vendor.title}</td>
            <td>{datestring}</td>
            <td>{timestring}</td>
        </tr>
    );
};

export default DetailItem;