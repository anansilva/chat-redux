import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { updateCurrentChannel } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { updateCurrentChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    currentChannel: state.currentChannel
  };
}

class ChannelList extends Component {
  selectChannel = (channelName) => {
    this.props.updateCurrentChannel(channelName);
  }

  render() {
    return (
      <div className="channels">
        {this.props.channels.map(channel =>
          (<button
            onClick={() => this.selectChannel(channel.name)}
            key={channel.id}
            className={this.props.currentChannel === channel.name ? 'active-channel' : ''}
          >
            {channel.name}
          </button>)
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
