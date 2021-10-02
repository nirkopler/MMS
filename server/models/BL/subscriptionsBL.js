const subscriptions = require('../Models/subscriptionsModel');

// GET All
exports.getAllSubscriptions = () => {
    return new Promise((resolve, reject) => {
        subscriptions.find({}, (err, res) => {
            (err) ? reject(err) : resolve(res)
        })
    })
}

// GET
exports.getSubscription = (id) => {
    return new Promise((resolve, reject) => {
        subscriptions.findById(id, (err, res) => {
            (err) ? reject(err) : resolve(res)
        })
    })
}

// POST
exports.postSubscription = (newSubscription) => {
    return new Promise((resolve, reject) => {
        new subscriptions(newSubscription).save((err, subscription) => {
            (err) ? reject(err) : resolve(subscription)
        })
    })
}

// DELETE
exports.deleteSubscription = (id) => {
    return new Promise((resolve, reject) => {
        subscriptions.findByIdAndDelete(id, (err) => {
            (err) ? reject(err) : resolve('DELETE Completed')
        })
    })
}