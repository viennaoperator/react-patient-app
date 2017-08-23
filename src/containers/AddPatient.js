import React from 'react'
import { connect } from 'react-redux'
import { addPatient } from '../actions/patient'

let AddPatient = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addPatient(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Patient
                </button>
            </form>
        </div>
    )
}
AddPatient = connect()(AddPatient)

export default AddPatient