import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import patientskylogo from '../img/patientskylogo.png';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from './Home';
import {Grid, Col} from 'react-bootstrap';
import {MedicineDatabase} from './MedicineDatabase';
import VisiblePatientList from '../containers/VisiblePatientList';

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
                                <Route path="/medicines" exact component={MedicineDatabase}/>
                                <Route path="/patients" exact component={VisiblePatientList}/>
                            </Col>
                        </Grid>
                    </div>
                </Router>
            </div>
        )
    }
}

export default AppFrame;