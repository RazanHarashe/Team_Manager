const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  preferredPosition: {
    type: String,
    default: '',
  },
  status: {
    game1: {
      type: String,
      default: 'Undecided',
    },
    game2: {
      type: String,
      default: 'Undecided',
    },
    game3: {
      type: String,
      default: 'Undecided',
    },
  },
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
