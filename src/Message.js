import React, { useState } from "react";
import { auth, db } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { Button } from "@mui/material";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "messages", message.id));
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  
  const createdAt = message.createdAt.toDate().toLocaleString();

  return (
    <div
      className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
        <p className="message-time">{createdAt}</p>
        {message.uid === user.uid && showDeleteButton && (
          <Button onClick={handleDelete}>Delete</Button>
        )}
      </div>
    </div>
  );
};

export default Message;
