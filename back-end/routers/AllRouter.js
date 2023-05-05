const express = require('express');
const router = express.Router()

const {getSongs,addSongs,updateSongs,deleteSongs,uploads} = require('../controllers/RouterController')
router.get('/getSongs',getSongs);
router.post('/addSongs',uploads.single('file'),addSongs);
router.patch('/updateSongs',updateSongs);
router.patch('/deleteSongs',deleteSongs);

module.exports = router