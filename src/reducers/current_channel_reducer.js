import { UPDATE_CURRENT_CHANNEL } from '../actions';

const currentChannelReducer = (state = null, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CHANNEL:
      return action.payload;
    default:
      return state;
  }
};

export default currentChannelReducer;
