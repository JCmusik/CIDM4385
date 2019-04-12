import React from 'react'
import { Link } from 'react-router-dom';
import * as ROUTES from '../Services/Routes';

const NavBar = () => {
    return (
        <navbar className="navbar container">
            <ul className="list-group list-group-horizontal list-group-sm">
                <li className="list-group-item bg-secondary"><Link to={ROUTES.APP} >Home</Link></li>
                <li className="list-group-item bg-secondary"><Link to={ROUTES.DETAIL} >Order History</Link></li>
            </ul>
        </navbar>
    )
}

export default NavBar;
