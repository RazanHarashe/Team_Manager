import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PlayerList from './Components/PlayerList';
import AddPlayer from './Components/AddPlayer';
import PlayerStatus from './Components/PlayerStatus';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Team Manager</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/players/list" />} />
          <Route path="/players/list" element={<PlayerList />} />
          <Route path="/players/add" element={<AddPlayer />} />
          <Route path="/status/:game" element={<PlayerStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
