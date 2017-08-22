import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Header = (props) => {
    return (
        <nav id="header">
            <Link to="/"> <img src={props.logo} alt='patientskylogo' className='header-logo'/></Link>
            <div className="menu-buttons">
                <Link to="/patients">
                    <button className="button-patientsky">Patients</button>
                </Link>
                <Link to="/medicines">
                    <button className="button-patientsky">Medicine</button>
                </Link>
            </div>
        </nav>
    )
}

export default Header;