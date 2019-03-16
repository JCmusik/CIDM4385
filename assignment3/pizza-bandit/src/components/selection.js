import React from 'react';
import Card from './card';
import Cheese from '../img/cheese.jpg';
import Pepp from '../img/pepperoni.jpg';
import Supreme from '../img/supreme.jpg';


const Selection = (props) => {
    return (
        <div className="card-columns">
            <Card selButtonClass={props.selButtonClass}
                title="Cheese"
                image={Cheese}
                onClick={props.onClick} />
            <Card selButtonClass={props.selButtonClass} title="Pepperoni" image={Pepp} />
            <Card selButtonClass={props.selButtonClass}
                title="Supreme"
                image={Supreme}
                onClick={props.onClick} />
        </div>

    )
}

export default Selection;