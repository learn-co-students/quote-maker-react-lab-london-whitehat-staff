import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  };

  handleOnChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  handleInputChange = event => {
    this.setState({
      author: event.target.value
    });
  };

  handleOnSubmit = event => {
    const id = uuid();
    event.preventDefault();
    this.props.addQuote({...this.state, id});
    this.setState({
      content: '',
      author: ''
    })
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={ event => this.handleOnSubmit(event) }>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        value={this.state.content}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={(event) => this.handleInputChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addQuote: quoteData => dispatch(addQuote(quoteData)),
});

// dispatch(addQuote(quote))
//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
