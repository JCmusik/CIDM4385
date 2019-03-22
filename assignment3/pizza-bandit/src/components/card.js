import React, { Component } from 'react';
import SelectButton from '../components/selectbutton';

class Card extends Component {
    state = {
        cards: {
            selected: true,
            item: '',
        }
    }

    render() {
        const { title, image, cards, onCardClick } = this.props;
        return (
            <div className="card bg-secondary">
                <div className="card-body text-center">
                    <div className="card-title"><img className="img-thumbnail rounded" src={image} alt={title} /></div>
                    <h4 className="card-title bg">{title}</h4>
                    <SelectButton title={title} cards={cards}
                        onCardClick={onCardClick} />
                </div>
            </div>
        );
    }
}

export default Card;