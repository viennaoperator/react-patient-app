//due to test data
let nextPatientId = 4
export const addPatient = name => {
    return {
        type: 'ADD_PATIENT',
        id: nextPatientId++,
        name: name
    }
}

export const editPatient = patient => {
    return {
        type: 'EDIT_PATIENT',
        patient: patient
    }
}