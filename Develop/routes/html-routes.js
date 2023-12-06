const router = require('express').Router()
const path = require('path')

// Sets the route 'index.html' as a response
router.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Sets the route 'notes.html' as a response
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;