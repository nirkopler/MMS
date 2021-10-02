const movies = require('../Models/moviesModel');

// GET All
exports.getAllMovies = () => {
    return new Promise((resolve, reject) => {
        movies.find({}, (err, res) => {
            (err) ? reject(err) : resolve(res)
        })
    })
}

// GET
exports.getMovie = (id) => {
    return new Promise((resolve, reject) => {
        movies.findById(id, (err, res) => {
            (err) ? reject(err) : resolve(res)
        })
    })
}

// POST
exports.postMovie = (newMovie) => {
    return new Promise((resolve, reject) => {
        new movies(newMovie).save((err, movie) => {
            (err) ? reject(err) : resolve(movie)
        })
    })
}

// PUT
exports.putMovie = (id, movie) => {
    return new Promise((resolve, reject) => {
        movies.findByIdAndUpdate(id, movie, (err) => {
            (err) ? reject(err) : resolve('PUT Completed')
        })
    })
}

// DELETE
// TODO:: add delete subscription
exports.deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        movies.findByIdAndDelete(id, (err) => {
            (err) ? reject(err) : resolve('DELETE Completed')
        })
    })
}