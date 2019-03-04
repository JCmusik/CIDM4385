import React from 'react';
import Submit from '../components/submit'
import Email from '../components/email';
import Password from '../components/password';

const Form = (props) => {
    return (
        <form className="container form-group bg-dark rounded p-4">
            <Email log={props.log} onChange={props.onChange} />
            <Password log={props.log} onChange={props.onChange} />
            <Submit onClick={props.onClick} />
        </form >
    )
}

export default Form;