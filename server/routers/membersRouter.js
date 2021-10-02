const express = require('express');
const router = express.Router();
const bl = require('../models/BL/membersBL');

// GET All
router.route('/')
    .get(async (req, res, next) => {
        return res.json(await bl.getAllMembers().catch(next));
    })

// GET by ID
router.route('/:id')
    .get(async (req, res, next) => {
        return res.json(await bl.getMember(req.params.id).catch(next));
    })

// POST
router.route('/')
    .post(async (req, res, next) => {
        return res.json(await bl.postMember(req.body).catch(next));
    })

// PUT
router.route('/:id')
    .put(async (req, res, next) => {
        return res.json(await bl.putMember(req.params.id, req.body).catch(next));
    })

// DELETE
router.route('/:id')
    .delete(async (req, res, next) => {
        return res.json(await bl.deleteMember(req.params.id).catch(next));
    })

module.exports = router;