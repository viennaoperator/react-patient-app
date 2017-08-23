import { connect } from 'react-redux'
import PatientList from '../components/PatientList'
import * as _ from 'lodash';
import {deletePatient} from '../actions/patient'
import {dispatch} from 'redux';
 

const getVisiblePatients = (patients, action) => {
    console.log(action);
    switch (action.type) {
        case 'SHOW_ALL':
            return patients;
        case 'DELETE_PATIENT':
            _.remove(patients,{
                id: action.id
            });
            return {};    
        default:
            return patients;
    }
}

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