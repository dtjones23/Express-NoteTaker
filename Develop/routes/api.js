const router = require('express').Router()

// npm install uuid
const { v4: uuidv4 } = require('uuid');

// import file system
const fs = require('fs')

// POST /api/notes should receive a new note to save on the request body 
// --> should add to the db.json file 
// --> then return the new note to the client

module.exports = router;


