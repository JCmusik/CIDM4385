import React from 'react';
import Card from './card';

class extends Component {
    render() {
        return (
            <div class="card">
                <Card title="Cheese" />
                <Card title="Pepperoni" />
                <Card title="Supreme" />
            </div>);
    }
}

export default Selection;