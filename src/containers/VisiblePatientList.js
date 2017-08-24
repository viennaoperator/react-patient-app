import { connect } from 'react-redux'
import PatientList from '../components/PatientList'
import {deletePatient} from '../actions/patient'

const mapStateToProps = state => {
    return {
        patients: state.patients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePatient: id => {
            dispatch(deletePatient(id))
        }
    }
}

const VisiblePatientList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientList)

export default VisiblePatientList