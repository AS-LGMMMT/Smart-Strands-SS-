const mongoose = require('mongoose');

module.exports = mongoose.model('user', new mongoose.Schema({
  name2: String,
  phoneno2: String,
  email2: String,
  service: String
}, { collection : 'database2' }));
