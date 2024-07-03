import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

function PlayerStatus() {
  const { game } = useParams();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = () => {
        axios.get('http://localhost:8000/api/players')
        .then(res => {
        setPlayers(res.data);
    })
    };
    fetchPlayers();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:8000/api/players/${id}/status`, { game, status: newStatus });
      setPlayers(players.map(player => player._id === id ? { ...player, status: { ...player.status, [game]: newStatus } } : player));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="player-status">
      <h2>Player Status - {game}</h2>
      <div>
        <Link to="/status/game1">Game 1</Link>
        <Link to="/status/game2">Game 2</Link>
        <Link to="/status/game3">Game 3</Link>
      </div>
      <ul>
        {players.map(player => (
          <li key={player._id}>
            {player.name}
            <button
              className={classNames({ active: player.status?.[game] === 'Playing' })}
              onClick={() => handleStatusChange(player._id, 'Playing')}
            >
              Playing
            </button>
            <button
              className={classNames({ active: player.status?.[game] === 'Not Playing' })}
              onClick={() => handleStatusChange(player._id, 'Not Playing')}
            >
              Not Playing
            </button>
            <button
              className={classNames({ active: player.status?.[game] === 'Undecided' })}
              onClick={() => handleStatusChange(player._id, 'Undecided')}
            >
              Undecided
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerStatus;
