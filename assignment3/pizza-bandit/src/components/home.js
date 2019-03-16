import React from 'react'
import SignInForm from '../components/signin/signinForm';

const Home = (props) => {
    return (
        <div className="wrapper text-white p-4">
            {/* <Selection /> */}
            <SignInForm onChange={props.onChange}
                onClick={props.onClick}
                log={props.log} />
        </div>
    )
}

export default Home;