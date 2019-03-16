import React from 'react';

const SelectButton = (props) => {
    return (
        <button className={props.className} onClick={props.onClick}>{props.name}</button>
    )
}

export default SelectButton;