import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comments from './comments';
import CommentForm from './commentform';
import Voting from './voting';
import AnswerForm from './answerform';

class Answers extends Component {
    constructor(props) {
        super(props);
        this.api = "/questions/" + this.props.id + "/answers/";
        this.state = {
            data: null
        };
        this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        fetch(this.api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
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
    render() {
        return (
            <div>
                <div>
                    {
                        this.state.data && this.state.data.map(answer => (
                            <div key={answer.id} >
                                <div style={{ overflow: 'hidden' }}>
                                    <div className="leftside">
                                        <Voting upvotes={answer.upvotes} downvotes={answer.downvotes} favourites={null} type="answer" id={answer.id} />
                                    </div>
                                    <div className="rightside">
                                        <div className="answer">
                                            {answer.text}
                                        </div>
                                        <div className="user">
                                            answered
                                            <p>-{answer.username}</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <div>
                                                <Comments id={answer.id} type="answer" />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                </div>
                <hr />
                <h3>Your Answer</h3>
                <AnswerForm id={this.props.id} handler={this.handler} />
            </div>
        )
    }
}
export default Answers;