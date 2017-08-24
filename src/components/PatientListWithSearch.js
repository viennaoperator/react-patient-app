import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SearchInput from "./SearchInput";
import Patient from './Patient';

export class PatientListWithSearch extends Component {

    constructor(props){
        super(props);
        console.log(this);
        this.searchFunction = this.searchFunction.bind(this);
        this.state = {
            shownPatients: props.patients
        };
    }

    searchFunction = (SearchTerm) => {
        console.log('searchFunction' + SearchTerm);
        this.setState({
            shownPatients:  this.props.patients.filter((patient) =>
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

PatientListWithSearch.propTypes = {
    patients: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    deletePatient: PropTypes.func.isRequired
}


export default PatientListWithSearch