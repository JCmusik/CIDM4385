import React from 'react';
import Email from '../signin/email';
import Password from '../signin/password';
import Submit from '../signin/submit';

const SignInForm = (props) => {
    return (
        <form className="bg-secondary rounded p-3">
            <Email log={props.log} onChange={props.onChange} />
            <Password log={props.log} onChange={props.onChange} />
            <Submit onClick={props.onClick} />
        </form>
    );
}

export default SignInForm;