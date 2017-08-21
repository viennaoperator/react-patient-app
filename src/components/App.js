import React, { Component } from 'react';
import '../App.css';
import { Button, Form} from 'react-bootstrap';

export class App extends Component {
  render() {
    return (
        <div className="App">
            <Button bsStyle="success">Add Patient</Button>
            <h2>PatientSky Patients:</h2>
            <Form>
                <Input placeholder="search for patient.."/>
            </Form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthday</th>
                        <th>Phone Number</th>
                        <th>Controls</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Harald</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                            <Button bsStyle="primary">Edit Patient</Button>
                            <Button bsStyle="danger">Delete Patient</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

const Input = (props) => {
    return (
        <input placeholder={props.placeholder}></input>
    )
}

export default App;
