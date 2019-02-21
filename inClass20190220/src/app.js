class App extends React.Component {
    state = {}
    render() {
        return (
            <div className="container">
                <Form />
                <div id="results">
                    <Results />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));