import React, { Component } from 'react';

class Email extends Component {
    state = {}
    render() {
        return (
            <div className="form-input m-2">
                <input type="email" placeholder="Email" />
            </div>
        );
    }
}

export default Email;