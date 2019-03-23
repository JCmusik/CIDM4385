import React from 'react'
import Selection from '../components/selection';

const Home = (props) => {
    const { cards, onCardClick, order, log, detailPage, auth } = props;
    return (
        <div className="wrapper text-white p-4">
            <Selection cards={cards}
                onCardClick={onCardClick}
                order={order}
                log={log}
                detailPage={detailPage}
                auth={auth} />
        </div>
    )
}

export default Home;