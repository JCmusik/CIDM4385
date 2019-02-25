import React, { Component } from 'react';
import Submit from '../components/submit'
import Email from '../components/email';
import Password from '../components/password';


class Form extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="form-group bg-dark rounded p-4">
                    <form>
                        <Email />
                        <Password />
                        <Submit />
                    </form>
                </div>
            </div >
        );
    }
}

export default Form;