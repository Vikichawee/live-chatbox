
import { auth } from "./Firebase";
import HomePage from './components/HomePage';
import { Button } from "@mui/material";
import Documentation from './components/Documentation.js';
import { Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SignOut from "./components/SignOut";
import ChatBox from "./components/ChatBox";
import './App.css'

const style = {
  "background-color": "black"
}


function App() {

  const [user] = useAuthState(auth)
  return (
    
    <>
    
      {user ? (
        <BrowserRouter>
          <nav>  
            <Button style={style} name="Home" variant="contained" component={Link} to="/" exact>Home</Button>
            <Button style={style} name="Chatbox" variant="contained" component={Link} to="/chatbox">Chat</Button>
            <Button style={style} name="Documentation" variant="contained" component={Link} to="/doc">Documentation</Button>
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
