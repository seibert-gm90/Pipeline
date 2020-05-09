import React from "react";
import { Widget } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

function Chat() {
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div className="Chat">
      <Widget handleNewUserMessage={handleNewUserMessage} />
    </div>
  );
}

export default Chat;

