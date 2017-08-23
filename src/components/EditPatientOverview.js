import React from 'react';
import EditPatient from '../containers/EditPatient';

const EditPatientOverview = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
        <EditPatient id={match.params.id}/>
    </div>
)
export default EditPatientOverview