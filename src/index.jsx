// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import currentChannelReducer from './reducers/current_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentChannel: currentChannelReducer,
  currentUser: currentUserReducer

});

const initialState = {
  messages: ['hello', 'world'],
  channels: ['general', 'ruby', 'design'],
  currentChannel: 'ruby',
  currentUsername: prompt('choose a username') || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
