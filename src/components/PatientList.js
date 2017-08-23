import React from 'react'
import PropTypes from 'prop-types'
import Patient from './Patient'
import { Form } from 'react-bootstrap'
import SearchInput from './SearchInput'

const PatientList = ({patients,deletePatient}) => (
    <div>
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
                <Patient key={patient.id} {...patient} deletePatient= {deletePatient}/>
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
    ).isRequired,
    deletePatient: PropTypes.func.isRequired
}

export default PatientList