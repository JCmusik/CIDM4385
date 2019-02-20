const Form = () => {
    state = {
        email: '',
        zipcode: ''
    }
    return React.createElement('form', {},
        [
            React.createElement(
                'label', {
                    key: 0,
                    htmlFor: 'EmailAddress',
                },
                React.createElement(Email, {
                    key: 1,
                    id: 'EmailAddress',
                    emailaddress: 'Email'
                }
                )
            )
        ],
        [
            React.createElement('label', {
                key: 2,
                htmlFor: 'Zip Code'
            },
                React.createElement(ZipCode, {
                    key: 3,
                    id: 'ZipCode',
                    zipcode: 'Zipcode'
                }),
            ),
        ],
        [
            React.createElement('label', {
                key: 2,
                htmlFor: 'Submit'
            },
                React.createElement(Submit, {
                    key: 4,
                    id: 'Submit',
                    value: 'Submit'
                }),
            )
        ]

    )
};