export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export const fetchMessages = () => {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages').then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
};
