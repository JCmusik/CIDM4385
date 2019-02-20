const Form = (props) => {
    return React.createElement('form', {},
        [
            React.createElement(
                'label', {
                    key: 0,
                    htmlFor: 'Email Address'
                },
                React.createElement(Email, {
                    key: 1,
                    id: 'Email Address'
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
                    id: 'Zip Code',
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
                    id: 'Submit'
                }),
            )
        ]

    )
};