import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <navbar className="navbar container">
            <ul className="list-group list-group-horizontal list-group-sm">
                <li className="list-group-item bg-secondary"><Link to="/" >Home</Link></li>
                <li className="list-group-item bg-secondary"><Link to="/detail" >Order History</Link></li>
            </ul>
        </navbar>
    )
}

export default NavBar;
