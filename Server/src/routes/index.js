const express = require("express")
const router = express.Router()

const getCharById = require('../controllers/getCharById')
const logins = require('../controllers/logins');
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav')

router.get('/login', logins)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

router.get('/character/:id', getCharById)

module.exports = router;