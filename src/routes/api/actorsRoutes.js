const express = require('express');
const router = express.Router();
const apiActorsController = require('../../controllers/api/actorsController');

router.get('/api/actors', apiActorsController.list);
router.get('/api/actors/detail/:id', apiActorsController.detail);

router.post('/api/movies/create', apiActorsController.create);

router.delete('/api/movies/delete/:id', apiActorsController.destroy);


module.exports = router;