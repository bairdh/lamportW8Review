const express = require('express');
//get just the router from express
const router = express.Router();

let inventory = [];

// attach a get route to the router
router.get('/', (req, res) => {
    console.log('in /inventory GET');
    res.send(inventory);
}) // end /inventory GET


router.post('/', (req, res) => {
    console.log('in inventory POST:', req.body);
    inventory.push(req.body);
    res.sendStatus(201);
}) // end inventory POST

// making router available
module.exports = router;