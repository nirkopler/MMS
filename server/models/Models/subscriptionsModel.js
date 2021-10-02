const mongoose = require('mongoose');

// ----- Subscription Schema -----
const subscriptionSchema = new mongoose.Schema({
    movie_id: {type: String, required: true},
    member_id: {type: String, required: true},
    date: {type: String, required: true}
})

module.exports = mongoose.model('subscriptions', subscriptionSchema); 