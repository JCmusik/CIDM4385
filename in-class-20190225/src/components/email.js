import React from 'react';
import Logger from './logger';

const Email = (props) => {
    return (
        <div className="form-group m-2">
            <label htmlFor="email"><Logger log={props.log.email} /></label>
            <input onChange={props.onChange} className="form-control" name="email" type="email" placeholder="Email" />
        </div >
    )
}

export default Email;
