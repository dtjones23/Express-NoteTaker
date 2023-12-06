const router = require('express').Router()

// npm install uuid
const { v4: uuidv4 } = require('uuid');

// import file system
const fs = require('fs')

// the get request to this routes endpoint
router.get('/api/notes', async (req, res) => {
    const db = await JSON.parse(fs.readFileSync('db/db.json'))
    res.json(db)
})
// POST /api/notes should receive a new note to save on the request body 
// --> should add to the db.json file 
// --> then return the new note to the client
router.post()

// module.exports = router;


