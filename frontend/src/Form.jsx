import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value.length !== 0){
            axios.get(`/palindrome/${this.state.value}`)
                .then(response => alert('IS A PALINDROME'))
                .catch(err => alert(err.response.status === 400 ? 'IS NOT A PALINDROME' : err.message));
        }
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="palindrome">Is a polindrome?</label>
                            <input className="form-control" id="palindrome" type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}