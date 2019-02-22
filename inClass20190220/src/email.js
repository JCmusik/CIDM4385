class Email extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input type="email" onChange={this.props.handleChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Email" />
            </ div>

        );
    }
}