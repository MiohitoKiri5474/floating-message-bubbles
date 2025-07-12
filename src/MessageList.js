import React from "react";
import PropTypes from "prop-types";

const MessageList = ({ messages, typingText }) => {
  return (
    <div className="message-list">
      {typingText && <div className="message typing-indicator">{typingText}</div>}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.expired ? "fade-out" : ""}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      expired: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  typingText: PropTypes.string.isRequired,
};

export default MessageList;
