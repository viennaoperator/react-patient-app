import React, {Component} from 'react';
import VisiblePatientList from '../containers/VisiblePatientList'
import PatientModal from './PatientModal';

export class PatientOverview extends Component {
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

    render(){
        return (
            <div>
                <PatientModal showModal={this.state.showModal} toggleModal={this.toggleModal}/>
                <VisiblePatientList />
            </div>
        )
    }
}

export default PatientOverview;