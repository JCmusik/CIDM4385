import React from 'react';
import SelectButton from '../components/selectbutton';

const Card = (props) => {
    const { title, image, price, cards, onCardClick } = props;
    return (
        <div className="card bg-secondary">
            <div className="card-body text-center">
                <div className="card-title"><img className="img-thumbnail rounded" src={image} alt={title} /></div>
                <h4 className="card-title">{title} {price}</h4>
                <SelectButton price={price} title={title} cards={cards}
                    onCardClick={onCardClick} />
            </div>
        </div>
    )
}

export default Card;