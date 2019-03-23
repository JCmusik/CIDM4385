import React from 'react';
import Card from './card';
import Cheese from '../img/cheese.jpg';
import Pepp from '../img/pepperoni.jpg';
import Supreme from '../img/supreme.jpg';
import Logger from '../components/signin/logger';

let cheesePrice = 9.99;
let pepperoniPrice = 12.99;
let supremePrice = 14.99;

const Selection = (props) => {
    const { cards, onCardClick, order, log } = props;
    return (
        <React.Fragment>
            <div className="card-columns">
                <Card
                    title="Cheese"
                    image={Cheese}
                    price={cheesePrice}
                    cards={cards}
                    onCardClick={onCardClick} />
                <Card
                    title="Pepperoni"
                    image={Pepp}
                    price={pepperoniPrice}
                    cards={cards}
                    onCardClick={onCardClick} />
                <Card
                    title="Supreme"
                    image={Supreme}
                    price={supremePrice}
                    cards={cards}
                    onCardClick={onCardClick}
                />
            </div>
            <div className="order bg-secondary text-center p-2 rounded">
                <button onClick={order} className="btn btn-warning">Place Order</button><span><Logger log={log.errors} /></span>
            </div>
        </React.Fragment>
    )
}

export default Selection;