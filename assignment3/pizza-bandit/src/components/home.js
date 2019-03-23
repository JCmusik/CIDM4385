import React from 'react'
import Selection from '../components/selection';

const Home = (props) => {
    const { cards, onCardClick, order, log, detailPage } = props;
    return (
        <div className="wrapper text-white p-4">
            <Selection cards={cards}
                onCardClick={onCardClick}
                order={order}
                log={log}
                detailPage={detailPage} />
        </div>
    )
}

export default Home;