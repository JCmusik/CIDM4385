class Form extends React.Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        return (
            <form className="form bg-dark text-white p-5">
                <Email />
                <Password />
                <Submit />
            </form>
        );
    }
}