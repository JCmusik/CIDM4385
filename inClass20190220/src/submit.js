class Submit extends React.Component {
    render() {
        return (
            <button type="submit" onSumbit={this.props.onSubmit} disabled={this.props.disabled} className="btn btn-primary">Submit</button>
        );
    }
}