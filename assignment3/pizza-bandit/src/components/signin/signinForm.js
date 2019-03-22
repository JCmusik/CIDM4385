import React from 'react';
import Email from '../signin/email';
import Password from '../signin/password';
import Login from './login';
import Logger from './logger';

const SignInForm = (props) => {
    const { log, onChange, onClick } = props;
    return (
        <form className="container bg-secondary rounded p-3 text-white">
            <h1 className="text-center">Log in</h1>
            <Email log={log} onChange={onChange} />
            <Password log={log} onChange={onChange} />
            <Login onClick={onClick} />
            <span className="m-2 text-danger"><Logger log={log.errors} /></span>
        </form>
    );
}

export default SignInForm;