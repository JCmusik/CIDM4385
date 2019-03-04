import React from 'react';
import Selection from './selectbutton';

const Card = (props) => {
    const { title, image } = props;
    return (
        <div className="card bg-secondary">
            <div className="card-body text-center">
                <div className="card-title"><img className="img-thumbnail rounded" src={image} alt={title} /></div>
                <h4 className="card-title bg">{title}</h4>
                <Selection onClick={props.onClick} />
            </div>
        </div>
    )
}

export default Card;