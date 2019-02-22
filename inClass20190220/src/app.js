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
        let mediumRegex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
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

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <Form onSumbit={this.handleSubmit} onChange={this.handleUserInput} log={this.state.formErrors} onSubmit={this.handleSubmit} disabled={!this.state.formValid} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));