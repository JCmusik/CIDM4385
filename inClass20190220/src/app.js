class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }

    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        return this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {

        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    // errorClass(error) {
    //     return (error.length === 0 ? '' : 'has-error');
    // }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    handleCopy() {
        onsole.log('log')
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Form onChange={this.handleUserInput} submit={this.handleSubmit} disabled={!this.state.formValid} />
                </div>
                <Logging log={this.state.email} />
                <Logging log={this.state.password} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));