import React, { Component } from 'react';
import Logger from './logger';

class Password extends Component {
    render() {
        return (
            <div className="form-input m-2">
                <p><Logger log={this.props.log.password} /></p>
                <input onChange={(e) => this.props.onChange(e)} name="password" type="password" className="form-control" placeholder="Password" />
            </div>
        );
    }
}

export default Password;