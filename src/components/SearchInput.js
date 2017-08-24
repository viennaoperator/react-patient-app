import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'

export class SearchInput extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            inputField: ''
        };
    }

    handleChange(event) {
        this.setState({
            inputField: event.target.value
        });
    }

    submitHandler() {
        // pass the input field value to the event handler passed
        // as a prop by the parent
        this.props.onClickFunction(this.state.inputField);
    }

    render() {
        return (
            <div>
                <Form onSubmit={(e) => {this.submitHandler(); e.preventDefault();}}>
                    <input placeholder={this.props.placeholder} onChange={this.handleChange}></input>
                    <Button bsStyle="primary" onClick={this.submitHandler}>Search</Button>
                </Form>
            </div>
        )
    }
}

export default SearchInput;