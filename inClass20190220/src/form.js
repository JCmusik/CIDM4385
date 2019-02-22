class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit} className="form bg-dark text-white p-5">
                <Email log={this.props.log} handleChange={this.props.onChange} />
                <Password log={this.props.log} handleChange={this.props.onChange} />
                <Submit disabled={this.props.disabled} />
            </form>
        );
    }
}