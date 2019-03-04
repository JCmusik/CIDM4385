import React from 'react';

const Card = (props) => {
    const { title, image } = props;
    return (
        <div class="card bg-secondary">
            <div class="card-body text-center">
                <div className="card-title"><img className="img-thumbnail rounded" src={image} alt={title} /></div>
                <h4 className="card-title bg">{title}</h4>
                <button className="btn btn-primary">Select</button>
            </div>
        </div>
    )
}

export default Card;