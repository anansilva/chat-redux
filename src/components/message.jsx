import React from 'react';

const Message = (props) => {
  const { author, content } = props.message;
  // const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span>{author}</span>
      </i>
      <p>{content}</p>
    </div>
  );
};

export default Message;
