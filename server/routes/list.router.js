const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', (req,res)=>{
    req.body

    let sqlText = `
        INSERT INTO list (name,quantity,unit, purchased)
        VALUES($1, $2, $3, $4)
        
    
    `
    let sqlValue=[req.body.name, req.body.quantity, req.body.unit, false]

    pool.query(sqlText, sqlValue)
    .then((dbresults) =>{
        res.sendStatus(200)
    })
    .catch((dbresults)=>{
        console.log(dbresults)
        res.sendStatus(500)
    })



})

module.exports = router;