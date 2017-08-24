import React from 'react';
import { Modal, Button} from 'react-bootstrap/lib/';
import AddPatient from "../containers/AddPatient";

const PatientModal = ({toggleModal, showModal}) => {
    return (
        <div>
            <Button onClick={toggleModal} bsStyle="primary" className="modal-primary ">Add Patient</Button>
            <div>
                <Modal
                    show={showModal}
                    onHide={toggleModal}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Add a Patient to the List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddPatient/>
                        <Button onClick={toggleModal} className="modal-button">Close</Button>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default PatientModal;