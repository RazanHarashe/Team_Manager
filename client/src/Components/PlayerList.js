import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    axios.get('http://localhost:8000/api/players')
      .then(res =>setPlayers(res.data))
      .catch(err => console.error(err));
  };


  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this player?')) {
      
        axios.delete(`http://localhost:8000/api/players/${id}`)
        //setPlayers(players.filter(player => player._id !== id));
        .then(() => fetchPlayers())
      .catch(err => console.error(err));
      } 
    
  };

  return (
    <div className="player-list">
      <h2>Player List</h2>
      <Link to="/players/add">Add Player</Link>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Preferred Position</th>
            <th>Action</th>
          </tr>
          </thead>
        <tbody>
        {players.map(player => (
          <tr key={player._id}>
            <td>{player.name}</td>
            <td>{player.preferredPosition}</td>
            <td>
            <button onClick={() => handleDelete(player._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default PlayerList;
