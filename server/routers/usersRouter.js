const express = require('express');
const router = express.Router();
const bl = require('../models/BL/usersBL');

// Login
router.route('/')
    .post(async (req, res, next) => {
        return res.json(await bl.login(req.body).catch(next));
    })

module.exports = router;