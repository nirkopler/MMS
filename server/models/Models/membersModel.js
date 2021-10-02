const mongoose = require('mongoose');

// ----- Member Schema -----
const memberSchema = new mongoose.Schema({
    full_name: {type: String, required: true},
    email: {type: String, required: true},
    city: {type: String, required: true}
})

module.exports = mongoose.model('members', memberSchema);