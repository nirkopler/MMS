const mongoose = require('mongoose');

// ----- Movie Schema -----
const moviesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    year_premiered: {type: String, required: true},
    geners: [{type: String, required: true}],
    image: {type: String, required: true},
})

module.exports = mongoose.model('movies', moviesSchema); 