const Email = (props) => {
    return React.createElement("input", {
        className: 'form-control-lg input-group text-center border border-dark',
        placeholder: props.emailaddress
    });
};