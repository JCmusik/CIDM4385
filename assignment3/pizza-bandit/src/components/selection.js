import React from 'react';
import Card from './card';
import Cheese from '../img/cheese.jpg';
import Pepp from '../img/pepperoni.jpg';
import Supreme from '../img/supreme.jpg';

const Selection = (props) => {
    return (
        <div className="card-columns">
            <Card
                title="Cheese"
                image={Cheese} />
            <Card
                title="Pepperoni"
                image={Pepp} />
            <Card
                title="Supreme"
                image={Supreme}
            />
        </div>
    )
}

export default Selection;