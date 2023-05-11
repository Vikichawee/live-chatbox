
import { auth } from "./Firebase";
import HomePage from './components/HomePage';
import { Button,TextField } from "@mui/material";
import Documentation from './components/Documentation.js';
import { Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SignOut from "./components/SignOut";
import ChatBox from "./components/ChatBox";
import './App.css'
import { useState } from "react";


const style = {
  "background-color": "black"
}


function App() {
  const [room, setRoom] = useState("");
  const [user] = useAuthState(auth)
  const [roomEntered, setRoomEntered] = useState(false);
  
  return (
    
    <>

      {user ? (
        <BrowserRouter>
          <nav>  
            <Button style={style} name="Home" variant="contained" component={Link} to="/live-chatbox/home" exact>Home</Button>
            <Button style={style} name="Chatbox" variant="contained" component={Link} to="/live-chatbox/chatbox">Chat</Button>
            <Button style={style} name="Documentation" variant="contained" component={Link} to="/live-chatbox/doc">Documentation</Button>
            <SignOut></SignOut>
          </nav> 
          <div className="room">
            {!roomEntered && (
              <>
                
                <TextField  label="Room" variant="outlined" placeholder="Type the name of the room" className="inputRoom" onChange={(e) => setRoom(e.target.value)} />
                <Button style={{ backgroundColor: "#FABADA", color: "black"}} className="buttonInput" component={Link} to="/live-chatbox/chatbox" onClick={() => setRoomEntered(true)}>Enter</Button>
              </>
            )}
          </div>
          {roomEntered && (
            <Routes>
              <Route path="/live-chatbox/home" element={<HomePage />} />
              <Route path="/live-chatbox/doc" element={<Documentation />} />
              <Route path="/live-chatbox/chatbox" element={<ChatBox room={room} />} />
            </Routes>
          )}
        </BrowserRouter>
      ) : (
        
          <nav>  
            <SignIn ></SignIn>
          </nav>
          

          
        
      )}
      

    </>
  );
}

export default App;
