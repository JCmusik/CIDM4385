import React from 'react';
import Email from '../signin/email';
import Password from '../signin/password';
import Login from './login';

const SignInForm = (props) => {
    return (
        <React.Fragment>
            <form className="container bg-secondary rounded p-3 text-white">
                <h1 className="text-center">Log in</h1>
                <Email log={props.log} onChange={props.onChange} />
                <Password log={props.log} onChange={props.onChange} />
                <Login onClick={props.onClick} />
                <span>{props.log.errors}</span>
            </form>
        </React.Fragment>
    );
}

export default SignInForm;