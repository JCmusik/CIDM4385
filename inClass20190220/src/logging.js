class Logging extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="logger container text-lg">{this.props.log}</div>
            </React.Fragment>
        );
    }
}