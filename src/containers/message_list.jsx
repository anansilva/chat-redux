import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Message from '../components/message';
import { fetchMessages } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchgMessages();
  }

  render() {
    return (
      <div className="messages">
        {this.props.messages.map(message => <Message message={message} key={message.id} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
