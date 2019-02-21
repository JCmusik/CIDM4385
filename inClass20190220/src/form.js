class Form extends React.Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        return (
            <form>
                <Email />
                <Password />
                <Submit />
            </form>
        );
    }
}