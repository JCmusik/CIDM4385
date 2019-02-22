class Email extends React.Component {
    render() {
        return (
            <div className={`form-group
            ${this.props.formErrors}`}>
                <label htmlFor="Email">Email address</label>
                <input type="email" onChange={this.props.handleChange} className="form-control" name="customer_email" aria-describedby="emailHelp" placeholder="Email" />
            </div>

        );
    }
}