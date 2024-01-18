const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/genresController');

router.get('/api/genres', apiGenresController.list);
router.get('/api/genres/detail/:id', apiGenresController.detail);
router.post('/api/genres/create', apiGenresController.create);

router.delete('/api/genres/delete/:id', apiGenresController.destroy);

module.exports = router;