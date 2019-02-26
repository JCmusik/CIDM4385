import React, { Component } from 'react';
import Submit from '../components/submit'
import Email from '../components/email';
import Password from '../components/password';


class Form extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center form-group bg-dark rounded p-4">
                    <form>
                        <Email log={this.props.log} onChange={this.props.onChange} />
                        <Password log={this.props.log} onChange={this.props.onChange} />
                    </form>
                    <Submit onClick={this.props.onClick} />
                </div>
            </div >
        );
    }
}

export default Form;