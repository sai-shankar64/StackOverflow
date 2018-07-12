import React, { Component } from 'react';
import logo from './stackoverflow.svg';
import './App.css';
import Questions from './questions';
import Question from './question';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuestionForm from './questionform';
import Redirect from 'react-router-dom/Redirect';

class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upvotes: this.props.upvotes,
            downvotes: this.props.downvotes,
            favourites: this.props.favourites,
            type: this.props.type,
            id: this.props.id,
        };
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.favourite = this.favourite.bind(this);
        this.api='/voting/'+this.state.type+"/"+this.state.id;
    }

    upvote(event) {
        this.setState(prev=>({upvotes:prev.upvotes+1}));
        fetch(this.api+'/upvote/',{method:'PUT'});
    }
    downvote(event) {
        this.setState(prev=>({downvotes:prev.downvotes+1}));
        fetch(this.api+'/downvote/',{method:'PUT'});
    }

    favourite(event) {
        this.setState(prev=>({favourites:prev.favourites+1}));
        fetch(this.api+'/favourite/',{method:'PUT'});
    }

    render() {
        return (
            <div>
                <span onClick={this.upvote} className="glyphicon glyphicon-triangle-top icon"></span>
                <p>{this.state.upvotes - this.state.downvotes}</p>
                <p> Votes</p>
                <span onClick={this.downvote} className="glyphicon glyphicon-triangle-bottom icon"></span>
                {this.state.favourites!=null?<span onClick={this.favourite} className="glyphicon glyphicon-star-empty icon"></span>:null}
                {this.state.favourites!=null?<p>{this.state.favourites}</p>:null}
            </div>
        )
    }
}

export default Voting;