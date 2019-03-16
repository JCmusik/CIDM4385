import React from 'react'
import Logger from '../logger';


const Password = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="Password">Password: <Logger log={props.log.password}></Logger>
            </label>
            <input type="password" className="form-control" id="Password" placeholder="Password" name="password"
                onChange={props.onChange} />
        </div>
    )
}

export default Password;