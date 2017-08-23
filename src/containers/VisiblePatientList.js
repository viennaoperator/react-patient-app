import { connect } from 'react-redux'
import PatientList from '../components/PatientList'

const getVisiblePatients = (patients, action) => {
    console.log('getVisiblePatients');
    console.log(patients);
    switch (action) {
        case 'SHOW_ALL':
            return patients;
        default:
            return patients;
    }
}

const mapStateToProps = state => {
    return {
        patients: getVisiblePatients(state.patients, 'SHOW_ALL')
    }
}

const VisiblePatientList = connect(
    mapStateToProps
)(PatientList)

export default VisiblePatientList