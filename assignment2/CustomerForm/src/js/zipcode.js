const ZipCode = (props) => {
    return React.createElement("input", {
        className: ' form-control-lg input-group text-center border border-dark',
        placeholder: props.zipcode,
        style: {
            marginTop: 5,
            marginBottom: 5
        }
    })
};