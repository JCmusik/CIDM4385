class App extends React.Component {
    state = {}
    render() {
        return (
            <div className="container">
                <Form />
            </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));