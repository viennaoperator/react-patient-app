import React from 'react'
import { Button } from 'react-bootstrap'

const Patient = (props) => (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.birthday}</td>
        <td>{props.phonenumber}</td>
        <td>
            <Button bsStyle="primary">Edit Patient</Button>
            <Button bsStyle="danger">Delete Patient</Button>
        </td>
    </tr>
)

export default Patient