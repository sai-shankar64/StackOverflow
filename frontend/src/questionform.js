import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CSRFToken from './csrftoken';
const API = "questions/add/"
class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const formdata = new FormData(event.target);
        event.target.reset();
        fetch(API, {
            method: 'post',
            body: formdata,
            credentials:'include'
        }).then((response)=>{
            console.log(response.json());
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">

                <form  method="post" onSubmit={this.onSubmit} action="">
                    <CSRFToken />
                    <div className="form-group">
                        <label >Title</label>
                        <input type='text' className="form-control" name="title" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <textarea name="description" className="form-control" ></textarea>
                    </div>
                    <div className="form-group">
                        <label >Tags</label>
                        <input name="tags" type='text' className="form-control" name="tags" placeholder="Tags" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Post Your Question" />
                    </div>
                </form>
            </div>
        )
    }
}
export default QuestionForm;