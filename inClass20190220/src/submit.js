class Submit extends React.Component {
    render() {
        return (
            <button type="submit" disabled={this.props.disabled} onClick={this.props.submit} className="btn btn-primary">Submit</button>
        );
    }
}