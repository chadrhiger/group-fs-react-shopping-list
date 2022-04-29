const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    console.log('GET /list');
    let getQuery = `
    SELECT * FROM "list";
    `;
    //make a pool.query to send this getQuery info to the db 
    //we will send back the rows as a response to app.jsx
    // make sure to type response.data in app.jsx
})

module.exports = router;