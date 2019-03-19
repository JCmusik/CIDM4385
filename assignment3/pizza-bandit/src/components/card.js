import React, { Component } from 'react';
import SelectButton from '../components/selectbutton';


class Card extends Component {
    render() {
        const { title, image } = this.props;
        return (
            <div className="card bg-secondary">
                <div className="card-body text-center">
                    <div className="card-title"><img className="img-thumbnail rounded" src={image} alt={title} /></div>
                    <h4 className="card-title bg">{title}</h4>
                    <SelectButton />
                </div>
            </div>
        );
    }
}

export default Card;