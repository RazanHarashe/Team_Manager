import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

function AddPlayer() {
  const [name, setName] = useState('');
  const [preferredPosition, setPreferredPosition] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAddPlayer = (e) => {
    if (name.length < 2) {
      setError('Name must be at least 2 characters in length.');
      return;
    }
    
    e.preventDefault();
    axios.post('http://localhost:8000/api/players', { name, preferredPosition })
    .then(() => navigate('/'))
    .catch(err => setError(err.response?.data?.errors || {}));
    
};

  return (
    <div className="add-player">
      <h2>Add Player</h2>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Preferred Position"
        value={preferredPosition}
        onChange={(e) => setPreferredPosition(e.target.value)}
      />
      <button onClick={handleAddPlayer} disabled={name.length < 2}>
        Add
      </button>
    </div>
  );
}

export default AddPlayer;
