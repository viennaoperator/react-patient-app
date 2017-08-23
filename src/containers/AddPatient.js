import React from 'react'
import {connect} from 'react-redux'
import {addPatient} from '../actions/patient'
import {Button, Col} from 'react-bootstrap'

let AddPatient = ({dispatch}) => {
    let input, name, email, birthdate, phonenumber

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(addPatient({
                        name: name.value,
                        email: email.value,
                        birthdate: birthdate.value,
                        phonenumber: phonenumber.value,
                    }))
                    name.value = ''
                    email.value = ''
                    birthdate.value = ''
                    phonenumber.value = ''
                }}
            >
                <div id="modalInput">
                    <Col>
                        <Col sm={3}>
                            Name:
                        </Col>
                        <Col sm={9}>
                            <input className="fullWidth"
                                   ref={node => {
                                       name = node
                                   }}
                                   placeholder="Name"
                            />
                        </Col>
                    </Col>

                    <Col>
                        <Col sm={3}>
                            Email:
                        </Col>
                        <Col sm={9}>
                            <input
                                ref={node => {
                                    email = node
                                }}
                                placeholder="patient@sick.com"
                            />
                        </Col>
                    </Col>


                    <Col>
                        <Col sm={3}>
                            Birthday:
                        </Col>
                        <Col sm={9}>
                            <input
                                ref={node => {
                                    birthdate = node
                                }}
                                placeholder="22/05/1990"
                            />
                        </Col>
                    </Col>

                    <Col>
                        <Col sm={3}>
                            Phonenumber:
                        </Col>
                        <Col sm={9}>
                            <input
                                ref={node => {
                                    phonenumber = node
                                }}
                                placeholder="+44123456789"
                            />
                        </Col>
                    </Col>
                    <br />
                </div>
                <Button bsStyle="primary" type='submit' className="modal-primary">Add Patient</Button>
            </form>
        </div>
    )
}
AddPatient = connect()(AddPatient)

export default AddPatient