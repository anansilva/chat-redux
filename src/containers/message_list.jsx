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
    this.props.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.props.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="messages" ref={(list) => { this.list = list; }}>
        {this.props.messages.map(message => <Message message={message} key={message.id} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
