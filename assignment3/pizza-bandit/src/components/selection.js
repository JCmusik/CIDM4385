import React from 'react';
import Card from './card';
import Cheese from '../img/cheese.jpg';
import Pepp from '../img/pepperoni.jpg';
import Supreme from '../img/supreme.jpg';
import Logger from '../components/signin/logger';

const Selection = (props) => {
    const { cards, onCardClick, order, log } = props;
    return (
        <React.Fragment>
            <div className="card-columns">
                <Card
                    title="Cheese"
                    image={Cheese}
                    cards={cards}
                    onCardClick={onCardClick} />
                <Card
                    title="Pepperoni"
                    image={Pepp}
                    cards={cards}
                    onCardClick={onCardClick} />
                <Card
                    title="Supreme"
                    image={Supreme}
                    cards={cards}
                    onCardClick={onCardClick}
                />
            </div>
            <div className="bg-secondary p-2 rounded">
                <button onClick={order} className="btn-warning">Place Order</button><span><Logger log={log.errors} /></span>
            </div>
        </React.Fragment>
    )
}

export default Selection;