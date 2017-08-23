import React from 'react'
import {connect} from 'react-redux'
import {Button, Col} from 'react-bootstrap'
import {getPatient} from '../actions/patient'
import {editPatient} from '../actions/patient'


let EditPatient = (props) => {
    console.log(props);
    //console.log(props.dispatch);
    //console.log(props.id);

    let patient = props.dispatch(getPatient({
        id: props.id
    }))
    //let patient = {id: 1, name: 'Harald', email: 'harald@outlook.at', birthday: '23.11.1994', phonenumber: '+443111231234'}

    //console.log(patient);

    let name = patient.name, email = patient.email, birthdate = patient.birthdate, phonenumber = patient.phonenumber

    return (
        <div>
            <form
                onSubmit={e => {
                    console.log('submit edit');
                    /*
                    dispatch(editPatient({
                        patient: {
                            id : '1',
                            name : name,
                            email : email,
                            birthdate : birthdate,
                            phonenumber: phonenumber
                        }
                    }))*/
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
                <Button bsStyle="primary" type='submit' className="modal-primary">Submit Changes</Button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state : state
    }
}

EditPatient = connect(
)(EditPatient)

export default EditPatient