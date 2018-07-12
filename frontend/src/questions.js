import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuestionForm from './questionform';

const API = '/questions/';
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      askquestion: false,
    };

    this.onClick = this.toggelaskquestion.bind(this);
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState((prev) => ({ data }));
      })
  }

  toggelaskquestion() {
    this.setState(prev => ({
      askquestion: !prev.askquestion,
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="askquestion">
          <input onClick={this.onClick} type="button" value={this.state.askquestion ? "Close QuestionForm" : "Ask Question"} className="btn btn-success" />
        </div>

        <div>
          {
            this.state.askquestion ? <QuestionForm /> : null
          }
        </div>
        <h1>Questions</h1>
        {
          this.state.data && this.state.data.map(question => (
            <div key={question.id}>
              <div className="leftside">
                <div>
                  <span>{question.upvotes - question.downvotes}</span>
                  <p>Votes</p>
                  <span>{question.favourites}</span>
                  <p>F</p>
                </div>
              </div>
              <div className="questionsummary rightside">
                <Link to={`questions/${question.id}/`}><h3>{question.title}</h3></Link>
                <div className="description">
                  {question.description}
                </div>
                <div>
                  {question.tags.split(" ").map(tag => (<span key={tag} className="tag">{tag}</span>))}
                </div>
              </div>
              <hr />
            </div>
          ))

        }
      </div>
    )

  }
}
export default Questions;