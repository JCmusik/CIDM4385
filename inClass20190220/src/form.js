class Form extends React.Component {
    render() {
        return (
            <form className="form bg-dark text-white p-5">
                <Email formErrors={this.props.formErrors} handleChange={this.props.onChange} />
                <Password handleChange={this.props.onChange} />
                <Submit disabled={this.props.disabled} submit={this.props.submit} />
            </form>
        );
    }
}