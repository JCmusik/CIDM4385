const Form = () => {
    return React.createElement('form', {},
        [
            React.createElement(Email, { key: 1 }),
            React.createElement(ZipCode, { key: 2 }),
            React.createElement(Submit, { key: 3 })
        ]
    )
};