//due to test data
let nextPatientId = 4
export const addPatient = patient => {
    return {
        type: 'ADD_PATIENT',
        id: nextPatientId++,
        name: patient.name,
        email: patient.email,
        birthday: patient.birthday,
        phonenumber: patient.phonenumber
    }
}

export const deletePatient = id => {
    return {
        type: 'DELETE_PATIENT',
        id: id
    }
}

export const editPatient = patient => {
    return {
        type: 'EDIT_PATIENT',
        patient: patient
    }
}