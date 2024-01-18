const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/moviesController');

router.get('/api/movies', apiMoviesController.list);
router.get('/api/movies/detail/:id', apiMoviesController.detail);

router.post('/api/movies/create', apiMoviesController.create);

router.delete('/api/movies/delete/:id', apiMoviesController.destroy);


module.exports = router;