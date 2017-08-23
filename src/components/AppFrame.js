import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import patientskylogo from '../img/patientskylogo.png';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from './Home';
import {Grid, Col} from 'react-bootstrap';
import {MedicineOverview} from './MedicineOverview';
import {PatientOverview} from './PatientOverview';
import EditPatientOverview from './EditPatientOverview';


export class AppFrame extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header logo={patientskylogo}></Header>
                        <Grid>
                            <Col sm={12}>
                                <Route path="/" exact component={Home}/>
                                <Route path="/medicines" exact component={MedicineOverview}/>
                                <Route path="/patients" exact component={PatientOverview} />
                                <Route path="/patientsedit/:id" exact component={EditPatientOverview}/>
                            </Col>
                        </Grid>
                    </div>
                </Router>
            </div>
        )
    }
}

export default AppFrame;