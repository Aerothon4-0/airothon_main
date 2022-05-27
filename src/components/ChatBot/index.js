import React, { useState } from "react";
import "./index.css";
import axios from "axios" ;

const ChatBot = ({ setShow }) => {
  const [x, setX] = useState([]);
  const [resp, setResponse] = useState()//Hello I'm your assistant.How can I help you?");
  const [message, setMessage] = useState("");

  const updateContent = () => {
    // use className = "chatbot_message_receive" to create a div for messages given to the user as replies
    var obj = {"message_from_user":message}
    axios.post('http://0.0.0.0:5000/code/chatbotreply', obj)
     .then((response)=> {
        //console.log(response)
        setResponse(response.data)
        const newDiv = [<div className="chatbot_message_send">{message}</div>];
        const respDiv = [<div className="chatbot_message_receive">{response.data}</div>]
        setX([...x, ...newDiv,...respDiv]);
     })
     .catch((error) => {
       console.log(error);
     });
    
    
    setMessage("");
    //console.log(x);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    // console.log(message);
  };

  return (
    <div className="chatbot">
      <div className="chatbot_header">
        <h1 className="chatbot_header_text">Chat</h1>
        <button
          className="chatbot_header_btn"
          onClick={() => setShow((prev) => !prev)}
        >
          &#10060;
        </button>
      </div>
      <div className="chatbot_body">{[x]}</div>
      <div className="chatbot_footer">
        <input
          className="chatbot_footer_input"
          type="text"
          value={message}
          placeholder="Type here"
          onChange={handleChange}
        ></input>
        <button className="chatbot_footer_btn" onClick={updateContent}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
