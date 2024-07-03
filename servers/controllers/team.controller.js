const Player = require('../models/team.model');

// Get all players
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new player
exports.addPlayer = async (req, res) => {
  const { name, preferredPosition } = req.body;

  if (name.length < 2) {
    return res.status(400).json({ message: 'Name must be at least 2 characters in length.' });
  }

  const newPlayer = new Player({ name, preferredPosition });

  try {
    const player = await newPlayer.save();
    res.status(201).json(player);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a player
exports.deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) return res.status(404).json({ message: 'Player not found' });

    res.json({ message: 'Player removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update player status
exports.updatePlayerStatus = async (req, res) => {
  const { game, status } = req.body;

  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ message: 'Player not found' });

    player.status[game] = status;
    await player.save();
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
