import React from 'react';

const Submit = (props) => {
    return (
        <div className="form-input m-2">
            <button onClick={props.onClick} className="btn btn-primary" >Submit</button>
        </div>
    );
}

export default Submit;