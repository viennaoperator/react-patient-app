const initialState = [
    {id: 1, name: 'Harald', email: 'harald@outlook.at', birthday: '23.11.1994', phonenumber: '+443111231234'},
    {id: 2, name: 'Stefan', email: 'stefan@outlook.at', birthday: '10.11.1994', phonenumber: '+443111421234'},
    {id: 3, name: 'Franz', email: 'franz@outlook.at', birthday: '09.11.1994', phonenumber: '+443129434734'}
]

const patients = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            console.log('adding patient with name:' + action.name);
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ]
        case 'EDIT_PATIENT':
            return state.map(patient =>
                (patient.id === action.patient.id)
                    ? {...patient, name: action.patient.name}
                    : patient
            )
        default:
            return state
    }
}

export default patients