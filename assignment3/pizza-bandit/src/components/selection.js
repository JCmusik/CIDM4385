import React from 'react';
import Card from './card';
import Cheese from '../img/cheese.jpg';
import Pepp from '../img/pepperoni.jpg';
import Supreme from '../img/supreme.jpg';

const Selection = (props) => {
    const { cards, onCardClick } = props;
    return (
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
    )
}

export default Selection;