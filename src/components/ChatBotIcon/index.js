import React, { useState } from "react";
import "./index.css";
import { BsFillChatDotsFill as ChatIcon } from "react-icons/bs";
import ChatBot from "../ChatBot";

const ChatBotIcon = ({ close }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="chatbot-icon" onClick={() => setShow((prev) => !prev)}>
        <ChatIcon size={50} style={{ color: "white" }} />
      </button>
      {show && <ChatBot setShow={setShow} />}
    </>
  );
};

export default ChatBotIcon;
