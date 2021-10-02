const mongoose = require('mongoose');

// ----- User Schema -----
const usersSchema = new mongoose.Schema({
    full_name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('users', usersSchema);