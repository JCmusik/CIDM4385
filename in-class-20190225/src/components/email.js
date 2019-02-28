import React, { Component } from 'react';
import Logger from './logger';

class Email extends Component {
    render() {
        return (
            <div className="form-group m-2">
                <label htmlFor="email"><Logger log={this.props.log.email} /></label>
                <input onChange={(e) => this.props.onChange(e)} className="form-control" name="email" type="email" placeholder="Email" />
            </div >
        );
    }
}

export default Email;