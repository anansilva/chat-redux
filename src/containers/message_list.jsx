import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Message from '../components/message';

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setCities },
//     dispatch
//   );
// }

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

class MessageList extends Component {
  // componentWillMount() {
  //   this.props.setCities();
  // }

  render() {
    return (
      <div className="messages">
        {this.props.messages.map(message => <Message message={message} key={message.id} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(MessageList);
