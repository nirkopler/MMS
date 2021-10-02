const express = require('express');
const router = express.Router();
const bl = require('../models/BL/moviesBL');

// GET All
router.route('/')
    .get(async (req, res, next) => {
        return res.json(await bl.getAllMovies().catch(next));
    })

// GET by ID
router.route('/:id')
    .get(async (req, res, next) => {
        return res.json(await bl.getMovie(req.params.id).catch(next));
    })

// POST
router.route('/')
    .post(async (req, res, next) => {
        return res.json(await bl.postMovie(req.body).catch(next));
    })

// PUT
router.route('/:id')
    .put(async (req, res, next) => {
        return res.json(await bl.putMovie(req.params.id, req.body).catch(next));
    })

// DELETE
router.route('/:id')
    .delete(async (req, res, next) => {
        return res.json(await bl.deleteMovie(req.params.id).catch(next));
    })

module.exports = router;