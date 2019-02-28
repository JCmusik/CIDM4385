import React, { Component } from 'react';
import Submit from '../components/submit'
import Email from '../components/email';
import Password from '../components/password';


class Form extends Component {
    render() {
        return (
            <form className="container form-group bg-dark rounded p-4">
                <Email log={this.props.log} onChange={this.props.onChange} />
                <Password log={this.props.log} onChange={this.props.onChange} />
                <Submit onClick={this.props.onClick} />
            </form >
        );
    }
}

export default Form;