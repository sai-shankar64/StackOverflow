import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CommentForm from './commentform';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.api = "/comments/" + this.props.type + "/" + this.props.id + "/";
        this.state = {
            data: null,
            addcomment: false,
        };
        this.handler = this.handler.bind(this);
        this.onClick = this.toggeladdcomment.bind(this);
    }

    componentDidMount() {
        fetch(this.api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState((prev) => ({ data }));
            })
    }

    handler() {
        fetch(this.api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState((prev) => ({ data }));
            })
    }

    toggeladdcomment() {
        this.setState(prev => ({
            addcomment: !prev.addcomment,
        }))
    }

    render() {
        return (
            <div>
                {this.state.data && this.state.data.length ? <h5 className="commentheading">Comments</h5> : null}
                {
                    this.state.data && this.state.data.map(comment => (
                        <div key={comment.id}>
                            <div className="comment">
                                <span className="commentvotes"> {comment.upvotes ? comment.upvotes : null} </span>
                                {comment.text} 
                                {"    "}
                                <span style={{color:'salmon'}}>-{comment.username}</span>
                            </div>
                            
                                
                            <hr />
                        </div>
                    ))
                }
                <div>
                    <a onClick={this.onClick}>{this.state.addcomment ? "cancel" : "add comment"}</a>
                </div>
                <div>
                    {
                        this.state.addcomment ? <CommentForm id={this.props.id} handler={this.handler} type={this.props.type} /> : null
                    }
                </div>
                {/* <Router>
                    <div>
                        <Link to="/addcomment/" >add comment</Link>
                        <Route exact path="/addcomment/" render={() => <CommentForm id={this.props.id} handler={this.handler} type={this.props.type} />} />
                    </div>
                </Router> */}
            </div>
        )
    }
}
export default Comments;