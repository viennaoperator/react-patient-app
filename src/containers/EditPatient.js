import React from 'react'
import {connect} from 'react-redux'
import {Button, Col} from 'react-bootstrap'
import {editPatient} from '../actions/patient'
import * as _ from 'lodash';
import {Link} from 'react-router-dom';

let EditPatient = (props) => {

    let patient =_.find(props.patients,(patient) =>{
        return patient.id.toString() === props.id;
    });

    let name, email, birthday, phonenumber;

    console.log(props);

    return (
        <div>
            <form

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
                                       if(patient && node){
                                           node.value = patient.name
                                       }
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
                                    if(patient && node){
                                        node.value = patient.email
                                    }
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
                                    if(patient && node){
                                        node.value = patient.birthday
                                    }
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
                                    if(patient && node){
                                        node.value = patient.phonenumber
                                    }
                                }}
                                placeholder="+44123456789"
                            />
                        </Col>
                    </Col>
                    <br />
                </div>
                <Link to="/patients">
                    <Button bsStyle="primary" type='submit' className="modal-primary" onClick={e => {
                        console.log('submit edit');
                        props.dispatch(editPatient({
                            patient: {
                                id : parseInt(props.id,10),
                                name : name.value,
                                email : email.value,
                                birthday : birthday.value,
                                phonenumber: phonenumber.value
                            }
                        }))
                    }}>Submit Changes</Button>
                </Link>
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