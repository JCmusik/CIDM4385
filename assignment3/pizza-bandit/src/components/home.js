import React, { Component } from 'react';
import Selection from './selection';

class Home extends Component {
    state = {
    }
    render() {
        return (
            <div className="wrapper text-white p-4">
                <Selection />
            </div>);
    }
}

export default Home;