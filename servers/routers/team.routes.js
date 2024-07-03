const express = require('express');
const router = express.Router();
const playerController = require('../controllers/team.controller');

// Get all players
router.get('/players', playerController.getPlayers);

// Add a new player
router.post('/players', playerController.addPlayer);

// Delete a player
router.delete('/players/:id', playerController.deletePlayer);

// Update player status
router.put('/players/:id/status', playerController.updatePlayerStatus);

module.exports = router;
