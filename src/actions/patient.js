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

export const editPatient = patient => {
    return {
        type: 'EDIT_PATIENT',
        patient: patient
    }
}

export const getPatient = patient => {
    return {
        type: 'GET_PATIENT',
        patient: patient.id
    }
}