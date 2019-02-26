import React, { Component } from 'react';

class Logger extends Component {
    render() {
        return (
            <React.Fragment>
                <span className="log text-danger">{this.props.log}</span>
            </React.Fragment>
        );
    }
}

export default Logger;