class Submit extends React.Component {
    render() {
        return (
            <button onClick={(e) => this.props.onClick(e)} type="submit" disabled={this.props.disabled} className="btn btn-primary">Submit</button>
        );
    }
}