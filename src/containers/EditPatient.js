import React from 'react'
import {connect} from 'react-redux'
import {Button, Col} from 'react-bootstrap'
//import {getPatient} from '../actions/patient'
import {editPatient} from '../actions/patient'
import * as _ from 'lodash';


let EditPatient = (props) => {

    let patient =_.find(props.patients,(patient) =>{
        return patient.id.toString() === props.id;
    });

    let name, email, birthday, phonenumber;

    console.log(props);

    return (
        <div>
            <form
                onSubmit={e => {
                    console.log('submit edit');
                    props.dispatch(editPatient({
                        patient: {
                            id : props.id,
                            name : name.value,
                            email : email.value,
                            birthday : birthday.value,
                            phonenumber: phonenumber.value
                        }
                    }))
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
                                       node.value = patient.name
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
                                    node.value = patient.email
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
                                    birthday = node
                                    node.value = patient.birthday
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
                                    node.value = patient.phonenumber
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
        patients: state.patients
    }
}

EditPatient = connect(
    mapStateToProps
)(EditPatient)

export default EditPatient