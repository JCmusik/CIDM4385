import React, { Component } from 'react';

class Password extends Component {
    state = {}
    render() {
        return (
            <div className="form-input m-2">
                <input type="password" placeholder="Password" />
            </div>
        );
    }
}

export default Password;