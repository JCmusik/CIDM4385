import React, { Component } from 'react';
import PaySelectButton from './paySelectButton';

class PayForm extends Component {
    state = {  }
    render() { 
        return (    
        <div className="d-flex justify-content-center">
        <form className="bg-secondary text-white p-2">
            <div className="form-group">
            <label for="payment">Method of Payment:</label>
            <select className="form-control" id="payment">
                <option>Visa</option>
                <option>Mastercard</option>
                <option>Discover</option>
                <option>American Express</option>
            </select>
            </div>
            <div className="d-flex justify-content-center">
                <PaySelectButton />
            </div>
        </form>
        </div>
         );
    }
}
 
export default PayForm;