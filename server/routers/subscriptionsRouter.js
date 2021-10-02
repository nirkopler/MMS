const express = require('express');
const router = express.Router();
const bl = require('../models/BL/subscriptionsBL');

// GET All
router.route('/')
    .get(async (req, res, next) => {
        return res.json(await bl.getAllSubscriptions().catch(next));
    })

// GET by ID
router.route('/:id')
    .get(async (req, res, next) => {
        return res.json(await bl.getSubscription(req.params.id).catch(next));
    })

// POST
router.route('/')
    .post(async (req, res, next) => {
        return res.json(await bl.postSubscription(req.body).catch(next));
    })

// PUT
router.route('/:id')
    .put(async (req, res, next) => {
        return res.json(await bl.putSubscription(req.params.id, req.body).catch(next));
    })

// DELETE
router.route('/:id')
    .delete(async (req, res, next) => {
        return res.json(await bl.deleteSubscription(req.params.id).catch(next));
    })

module.exports = router;