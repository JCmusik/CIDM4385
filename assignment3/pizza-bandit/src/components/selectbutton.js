import React from 'react';

const SelectButton = (props) => {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>Select</button>
    )
}

export default SelectButton;