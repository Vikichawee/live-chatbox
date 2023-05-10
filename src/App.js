
import { auth } from "./Firebase";
import HomePage from './HomePage';
import { Button } from "@mui/material";
import Documentation from './Documentation.js';
import { Routes } from 'react-router-dom';
import SignIn from './SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SignOut from "./SignOut";
import ChatBox from "./ChatBox";
import './App.css'

function App() {

  const [user] = useAuthState(auth)
  return (
    <>
      {user ? (
        <BrowserRouter>
          <nav>  
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/chatbox">Chat</Button>
            <Button component={Link} to="/doc">Documentation</Button>
            <SignOut></SignOut>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doc" element={<Documentation />} />
            <Route path="chatbox" element={<ChatBox></ChatBox>}></Route>
          </Routes>
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
