class Form extends React.Component {
    render() {
        return (
            <form className="form bg-dark text-white p-5">
                <Email onSumbit={this.props.onSubmit} log={this.props.log} handleChange={this.props.onChange} />
                <Password log={this.props.log} handleChange={this.props.onChange} />
                <Submit disabled={this.props.disabled} onSubmit={this.props.onSubmit} />
            </form>
        );
    }
}