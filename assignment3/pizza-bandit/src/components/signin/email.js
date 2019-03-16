import React from 'react'
import Logger from '../logger';

const Email = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="Email">Email address: <Logger log={props.log.email} /></label>
            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"
                name="email"
                onChange={props.onChange} />
        </div>
    )
}

export default Email;