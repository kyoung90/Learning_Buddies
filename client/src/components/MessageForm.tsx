import React, { useEffect, useContext, useState } from "react";

const MessageForm: React.FC = (props) => {
  const [body, setBody] = useState("")

  const update = () => {
    return e =>
    setBody(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //refactor App to use ActionCable Provider package
    App.cable.subscriptions.subscriptions[0].speak({ message: body });
    setBody("");
  }


  return (
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input
      type="text"
      value={body}
      onChange={update()}
      placeholder="Type message here"
      />
      <input type="submit" />
      </form>
    </div>
  );

}



export default MessageForm;
