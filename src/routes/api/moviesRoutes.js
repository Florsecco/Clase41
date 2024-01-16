const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/moviesController');


router.post('/api/movies/create', apiMoviesController.create);

router.delete('/api/movies/delete/:id', apiMoviesController.destroy);


module.exports = router;