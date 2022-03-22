const mongoose = require('mongoose');

module.exports = mongoose.model('user', new mongoose.Schema({
  name1: String,
  username1: String,
  phoneno1: String,
  password1: String
}, { collection : 'database' }));
