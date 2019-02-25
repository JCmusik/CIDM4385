class App extends React.Component {
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        return this.setState({ [name]: value },
            () => { this.validateField(name, value) });

    }
    state = {
        email: '',
        password: '',
        formErrors: { email: '', password: '' },
        emailValid: false,
        passwordValid: false,
        formValid: false,
        formresults: ''
    }

    validateField(fieldName, value) {

        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let emailRegex = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        let mediumRegex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

        switch (fieldName) {
            case 'email':
                emailValid = value.match(emailRegex);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.match(mediumRegex);
                fieldValidationErrors.password = passwordValid ? '' : ' needs 8 characters or more, at least 1 number, and one capitalized letter';
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

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    handleClick = (e) => {
        e.preventDefault();
        const formresults = "Email: " + this.state.email;
        this.setState({ formresults: formresults });
    }

    render() {
        return (
            <div className="container">
                <Form value={this.state} onClick={this.handleClick} onChange={this.handleUserInput} log={this.state.formErrors} disabled={!this.state.formValid} />
                <h1>{this.state.formresults}</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));