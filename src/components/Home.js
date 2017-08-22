import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

export class Home extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Hello, to this demo app!</h1>
                <p>Select patients to see all the available patients. You can Add / Edit and Delete them.</p>
                <p>If you look for medicines search in the medicine database.</p>
                {this.props.children}
            </Jumbotron>
        )
    }
}

export default Home;