class Password extends React.Component {
    render() {

        return (
            <div className="form-group">
                <label htmlFor="Password">Password <Logging log={this.props.log.password} /></label>
                <input onChange={this.props.handleChange} type="password" className="form-control" name="password" placeholder="password" />
            </div>
        );
    }
}