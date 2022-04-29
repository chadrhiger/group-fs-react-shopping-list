const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    console.log('GET /list');
    res.sendStatus(200);
})

module.exports = router;