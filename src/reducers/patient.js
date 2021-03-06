import * as _ from 'lodash';

const initialState = [
    {id: 1, name: 'Harald', email: 'harald@outlook.at', birthday: '23.11.1994', phonenumber: '+443111231234'},
    {id: 2, name: 'Stefan', email: 'stefan@outlook.at', birthday: '10.11.1994', phonenumber: '+443111421234'},
    {id: 3, name: 'Franz', email: 'franz@outlook.at', birthday: '09.11.1994', phonenumber: '+443129434734'}
]

const patients = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    email: action.email,
                    birthday: action.birthday,
                    phonenumber: action.phonenumber
                }
            ]
        case 'EDIT_PATIENT':
            let indexToEdit = _.findIndex(state, {
                id: action.patient.id});
            state[indexToEdit] = action.patient;
            return [...state];

        case 'DELETE_PATIENT':
            _.remove(state,{
                id: action.id
            });
            return [...state]; 

        case 'SHOW_ALL':
            return [...state];

        default:
            return [...state];
    }
}

export default patients