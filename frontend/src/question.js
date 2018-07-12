import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AnswerForm from './answerform';
import Answers from './answers';
import Comments from './comments';
import CommentForm from './commentform';
import Voting from './voting';

class Question extends Component {
  constructor(props) {
    super(props);
    this.api = '/questions/' + this.props.match.params.id + '/';
    this.state = {
      data: null,
      changed: 0,
    };
  }

  componentDidMount() {
    fetch(this.api, {
      credentials: 'include'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState((prev) => ({ data }));
      })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.data && this.state.data.map(question => (
            <div key={question.id}>
              <div>
                <div className="leftside">
                  <Voting upvotes={question.upvotes} downvotes={question.downvotes} favourites={question.favourites} type="question" id={question.id} />
                </div>

                <div className="rightside questionsummary">
                  <h3>{question.title}</h3>
                  <div className="description">
                    {question.description}
                  </div>
                  <div>
                    {question.tags.split(" ").map(tag => (<span key={tag} className="tag">{tag}</span>))}
                  </div>
                </div>
              </div>
              <div className="user">
              asked
                <p>-{question.username}</p>
              </div>
              <hr />
              <div>
                <Comments id={question.id} type="question" />
              </div>
              <hr />
              <div>
                <h3>Answers</h3>
                <Answers id={question.id} />
              </div>


            </div>
          ))

        }

      </div>
    )

  }
}
export default Question;