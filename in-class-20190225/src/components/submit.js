import React, { Component } from 'react';

class Submit extends Component {
    render() {
        return (
            <div className="form-input m-2">
                <button onClick={(e) => this.props.onClick(e)} className="btn btn-primary" >Submit</button>
            </div>
        );
    }
}

export default Submit;