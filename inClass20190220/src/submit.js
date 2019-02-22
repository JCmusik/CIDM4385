class Submit extends React.Component {
    render() {
        return (
            <button type="submit" disabled={this.props.disabled} className="btn btn-primary">Submit</button>
        );
    }
}