import React from 'react'
import {Button} from 'react-bootstrap'
import {Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Patient = (props) => (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.birthday}</td>
        <td>{props.phonenumber}</td>
        <td><Link to={`patientsedit/${props.id}`}  >
            <Button bsStyle="primary"><Glyphicon glyph="pencil"/>Edit</Button>
        </Link>
            <Button onClick={() => {
                props.deletePatient(props.id)
            }} bsStyle="danger"><Glyphicon glyph="remove"/>Delete</Button>
        </td>
    </tr>
)

export default Patient