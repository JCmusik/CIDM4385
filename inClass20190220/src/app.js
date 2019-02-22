class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_email: '',
            customer_password: '',
            formErrors: { customer_email: '', customer_password: '' },
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
            case 'customer_email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.customer_email = emailValid ? '' : ' is invalid';
                break;
            case 'customer_password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.customer_password = passwordValid ? '' : ' is too short';
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

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className="container">
                <Form formErrors={this.state.formErrors} onChange={this.handleUserInput} submit={this.handleSubmit} disabled={!this.state.formValid} />
            </div>
        );
    }

}
const FormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>

ReactDOM.render(<App />, document.getElementById('root'));