const members = require('../Models/membersModel');

// GET All
exports.getAllMembers = () => {
    return new Promise((resolve, reject) => {
        members.find({}, (err, res) => {
            (err) ? reject(err) : resolve(res)
        })
    })
}

// GET
exports.getMember = (id) => {
    return new Promise((resolve, reject) => {
        members.findById(id, (err, res) => {
            (err) ? reject(err) : resolve(res)
        })
    })
}

// POST
exports.postMember = (newMember) => {
    return new Promise((resolve, reject) => {
        new members(newMember).save((err, member) => {
            (err) ? reject(err) : resolve(member)
        })
    })
}

// PUT
exports.putMember = (id, member) => {
    return new Promise((resolve, reject) => {
        members.findByIdAndUpdate(id, member, (err) => {
            (err) ? reject(err) : resolve('PUT Completed')
        })
    })
}

// DELETE
// TODO:: add delete subscription
exports.deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        members.findByIdAndDelete(id, (err, member) => {
            if(err) {reject(err)} else {
                subscriptions.deleteMany({ member_id: member._id }, (error) => {
                    (error) ? reject(error) : resolve('DELETE Completed');
                })
            }
        })
    })
}