import React from 'react';

const Logger = (props) => {
    const { log } = props;
    return (
        <React.Fragment>
            <span className="log text-warning m-1">{log}</span>
        </React.Fragment>
    );
}

export default Logger;