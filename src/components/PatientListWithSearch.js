import React, { Component } from 'react';
import SearchInput from "./SearchInput";
import Patient from './Patient';

export class PatientListWithSearch extends Component {

    constructor(props){
        super(props);
        this.searchFunction = this.searchFunction.bind(this);
        this.state = {
            patients : props.patients,
            shownPatients: props.patients
        };
    }

    searchFunction = (SearchTerm) => {
        console.log('searchFunction' + SearchTerm);
        this.setState({
            patients : this.props.patients,
            shownPatients:  this.state.patients.filter((patient) =>
                patient.name.toUpperCase().includes(SearchTerm.toUpperCase()))
        })
    }

    render() {
        return (
            <div>
                <h2>PatientSky Patients:</h2>
                <SearchInput onClickFunction={this.searchFunction}/>
                <table id="patient-list">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthday</th>
                        <th>Phone Number</th>
                        <th>Controls</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.shownPatients.map(patient => (
                        <Patient key={patient.id} {...patient} deletePatient={this.props.deletePatient}/>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PatientListWithSearch