import React, { Component } from 'react';
import '../App.css';
import { Button, Form} from 'react-bootstrap';
import SearchInput from './SearchInput'
import PatientModal from './PatientModal'

export class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal(){
        if(this.state.showModal){
            this.setState({
                showModal: false
            })
        }else {
            this.setState({
                showModal: true
            })
        }
    }

    render() {
        return (
            <div className="App">
                <Button bsStyle="success">Add Patient</Button>
                <h2>PatientSky Patients:</h2>
                <Form>
                    <SearchInput placeholder='search for patient..'/>
                    <PatientModal toggleModal={this.toggleModal} showModal={this.state.showModal}/>
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

export default App;
