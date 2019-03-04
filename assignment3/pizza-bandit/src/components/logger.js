import React from 'react';

const Logger = (props) => {
    return (
        <React.Fragment>
            <span className="log text-danger">{props.log}</span>
        </React.Fragment>
    );
}

export default Logger;