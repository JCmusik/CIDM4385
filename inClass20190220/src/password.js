class Password extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input onChange={this.props.handleChange} type="password" className="form-control" name="customer_password" placeholder="password" />
            </div>
        );
    }
}