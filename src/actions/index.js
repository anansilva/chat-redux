export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const UPDATE_CURRENT_CHANNEL = 'UPDATE_CURRENT_CHANNEL';

export const updateCurrentChannel = (channelName) => {
  return {
    type: UPDATE_CURRENT_CHANNEL,
    payload: channelName
  };
};

export const fetchMessages = () => {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages').then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
};

export const createMessage = (channel, author, content) => {
  const body = { author, content };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
};
