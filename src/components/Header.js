import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Col} from 'react-bootstrap';

const Header = (props) => {
    return (
        <nav id="header">
            <Grid>
                <Col xs={12} md={2}>
                    <Link to="/"> <img src={props.logo} alt='patientskylogo' className='header-logo'/></Link>
                </Col>
                <div className="menu-buttons">
                    <Link to="/patients">
                        <button className="button-patientsky">Patients</button>
                    </Link>
                    <Link to="/medicines">
                        <button className="button-patientsky">Medicine</button>
                    </Link>
                </div>
            </Grid>
        </nav>
    )
}

export default Header;