import React, { Component } from 'react';
import 'whatwg-fetch';
import '../App.css';
import MedicineList from './MedicineList';
import { Col } from 'react-bootstrap/lib';
import SearchInput from './SearchInput';

export class MedicineOverview extends Component {
    constructor(props){
        super(props);
        this.state = {
            medicines : [],
            searchTerm : ''
        };
        this.searchMedicine = this.searchMedicine.bind(this);
    }

    searchMedicine(searchTerm){
        console.log(`you searched for ${searchTerm}`);

        fetch(`https://fest-searcher.herokuapp.com/api/fest/s/${searchTerm}`)
            .then(response => {
                return response.json()
            }).then(json => {
                this.setState({
                    medicines : json
                })
                console.log(this.state);
        }).catch(err => {
            console.log(err)
        })
    }

    componentWillMount() {
        this.searchMedicine('PANODIL');
    }

    render(){
        return (
            <div>
                <Col sm={12}>
                <h2>
                    Medicine Database
                </h2>
                <SearchInput placeholder="search for medicine" onClickFunction={this.searchMedicine}/>
                </Col>
                <Col sm={12}>
                    <MedicineList listOfMedicines={this.state.medicines}/>
                </Col>
            </div>
        )
    }
}

export default MedicineOverview;