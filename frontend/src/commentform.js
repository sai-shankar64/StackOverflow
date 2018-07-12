import React, { Component } from 'react';
import CSRFToken from './csrftoken';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.api ="/comments/"+this.props.type+"/"+this.props.id+"/add/";
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const formdata = new FormData(event.target);        
        event.target.reset();
        event.preventDefault();
        fetch(this.api, {
            method: 'post',
            body: formdata,
            credentials: 'include'
        }).then(response=>{
            console.log(response.json());
            this.props.handler();

        });
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <CSRFToken />
                    <div className="form-group">
                        <textarea name="text" className="form-control" ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Comment" />
                    </div>
                </form>
            </div>
        )
    }
}
export default CommentForm;