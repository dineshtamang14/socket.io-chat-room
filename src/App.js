import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { UserContext } from "./UserContext";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import Navbar from './components/layout/Navbar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{user, setUser}}>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/chat/:room_id/:room_name" element={<Chat />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
