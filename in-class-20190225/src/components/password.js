import React from 'react';
import Logger from './logger';

const Password = (props) => {
    return (
        <div className="form-input m-2">
            <p><Logger log={props.log.password} /></p>
            <input onChange={props.onChange} name="password" type="password" className="form-control" placeholder="Password" />
        </div>
    )
}

export default Password;