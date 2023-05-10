import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  where
  
} from "firebase/firestore";
import { db } from "../Firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

export default function ChatBox  ({room}) {
  const [messages, setMessages] = useState([]);
  
  
  useEffect(() => {
    console.log(room)
    const queryMessages = query(
      collection(db, "messages"),
      where("room", "==", room),
      orderBy("createdAt")
    );
    
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        console.log(doc.data());
        messages.push({ ...doc.data(), id: doc.id });
      });
      
      setMessages(messages);
    });

    return () => unsuscribe();
  }, [room]);
  
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      
      <SendMessage room={room}/>
    </main>
  );
};
