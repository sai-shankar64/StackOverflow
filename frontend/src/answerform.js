import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CSRFToken from './csrftoken';
class AnswerForm extends Component {
    constructor(props) {
        super(props);
        this.api = "/questions/" + this.props.id + "/answers/add/";
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const formdata = new FormData(event.target);
        fetch(this.api, {
            method: 'post',
            body: formdata,
            credentials: 'include'
        }).then((response)=>{
            console.log(response.json());
            this.props.handler();
        })
        event.target.reset();
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} action="">
                    <CSRFToken />
                    <div className="form-group">
                        <textarea name="text" className="form-control" ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Post Your Answer" />
                    </div>
                </form>
            </div>
        )
    }
}
export default AnswerForm;