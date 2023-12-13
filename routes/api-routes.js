const router = require('express').Router()

// npm install uuid
const { v4: uuidv4 } = require('uuid'); // unique identifier 

// import file system
const fs = require('fs')

// route handles HTTP GET requests to the /api/notes endpoint.
router.get('/api/notes', async (req, res) => {
    const db = await JSON.parse(fs.readFileSync('db/db.json'))
    res.json(db)
})

//route handles HTTP POST requests to the /api/notes endpoint
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json'))
    const userInput = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    // new note is pushed into the existing array of notes
    dbJson.push(userInput);

    // updated array is written back to 'db.json' file
    fs.writeFileSync('db/db.json',JSON.stringify(dbJson));
    res.json(dbJson)
})

module.exports = router;