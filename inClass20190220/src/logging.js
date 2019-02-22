class Logging extends React.Component {
    render() {
        return (
            <React.Fragment>
                <span className="text-danger">{this.props.log}</span>
            </React.Fragment>
        );
    }
}