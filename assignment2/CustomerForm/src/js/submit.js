const Submit = (props) => {
    return React.createElement("button", {
        className: 'btn border-dark',
        style: {
            float: 'right'
        }
    }, props.value)
};