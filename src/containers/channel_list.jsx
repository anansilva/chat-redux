import { connect } from 'react-redux';
import React, { Component } from 'react';

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

class ChannelList extends Component {
  render() {
    return (
      <div className="channels">
        {this.props.channels.map(channel => 
          <p key={channel.id}>{channel.name}</p>)}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ChannelList);
