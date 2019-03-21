import React from 'react'
import Selection from '../components/selection';

const Home = (props) => {
    const { cards, onCardClick } = props;
    return (
        <div className="wrapper text-white p-4">
            <Selection cards={cards}
                onCardClick={onCardClick} />
        </div>
    )
}

export default Home;