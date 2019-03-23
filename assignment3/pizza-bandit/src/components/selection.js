import React from 'react';
import Card from './card';
import Cheese from '../img/cheese.jpg';
import Pepp from '../img/pepperoni.jpg';
import Supreme from '../img/supreme.jpg';
import Logger from '../components/signin/logger';
import { Redirect, Route } from 'react-router-dom';
import Detail from './OrderInfo/detail';

let cheesePrice = 9.99;
let pepperoniPrice = 12.99;
let supremePrice = 14.99;

const Selection = (props) => {
    const { cards, onCardClick, order, log, detailPage, auth } = props;
    if (!auth) { return <Redirect to="/" /> }
    else if (detailPage === true) { return <Redirect to='/detail' /> };
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
            <Route path="/detail" component={Detail} />
        </React.Fragment>
    )
}

export default Selection;