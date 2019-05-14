import React, { Component } from 'react';


export default class QuoteCard extends Component {
  // handleClick = () =>{
  //   this.props.upvote(this.props.quote.id);
  // };

  handleClick = (event) => {
    console.log('ssss', event.target.dataset);
    if (event.target.dataset.action === 'upvote') {
      this.props.upvote(this.props.quote.id);
    }

    if (event.target.dataset.action === 'downvote') {
      this.props.downvote(this.props.quote.id);
    }
    if(event.target.dataset.action === 'remove') {
      this.props.remove(this.props.quote.id);
    }
  };

  render() {
    const props = this.props;
    return(
      <div>
        <div className="card card-inverse card-success card-primary mb-3 text-center">
          <div className="card-block">
            <blockquote className="card-blockquote">
              <p>{props.quote.content}</p>
              <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
            </blockquote>
          </div>
          <div className="float-right">
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-primary"
                data-action="upvote"
                onClick={this.handleClick}
              >
                Upvote
              </button>
              <button
                type="button"
                data-action="downvote"
                className="btn btn-secondary"
                onClick={this.handleClick}
              >
                Downvote
              </button>
              <button
                type="button"
                data-action="remove"
                className="btn btn-danger"
                onClick={this.handleClick}
              >
                &times; REMOVE
              </button>
            </div>
            {/* <div>Votes: {Render Quote Votes}</div> */}
            <div>Votes: {props.quote.votes}</div>
          </div>
        </div>
      </div>
    )
  }
}
