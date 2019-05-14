import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const quotes = this.props.quotes.map((quote, index) =>
      (<QuoteCard
        quote={quote}
        remove={this.props.removeQuote}
        upvote={this.props.upvoteQuote}
        downvote={this.props.downvoteQuote}
        key={index}
      />));
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              <ul>
                {quotes}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    content: state.content,
    author: state.author
  }
};

const mapDispatchToProps = dispatch => ({
  removeQuote: quoteId => dispatch(removeQuote(quoteId)),
  upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
  downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
});

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
