import React from 'react'
import PropTypes from 'prop-types'
import Patient from './Patient'
import { Button, Form } from 'react-bootstrap'
import SearchInput from './SearchInput'
import AddPatient from '../containers/AddPatient';

const PatientList = ({patients}) => (
    <div>
        <AddPatient />
        <Button bsStyle="success">Add Patient</Button>
        <h2>PatientSky Patients:</h2>
        <Form>
            <SearchInput placeholder='search for patient name..'/>
        </Form>
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
            {patients.map(patient => (
                <Patient key={patient.id} {...patient}/>
            ))}
            </tbody>
        </table>
    </div>
)

PatientList.propTypes = {
    patients: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default PatientList