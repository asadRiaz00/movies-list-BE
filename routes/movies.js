const express = require('express');
const router = express.Router();
const movies = require('../services/movies');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await movies.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting movies `, err.message);
    next(err);
  }
});
router.post('/', async function(req, res, next) {
    try {
      res.json(await movies.create(req.body));
    } catch (err) {
      console.error(`Error while creating movie`, err.message);
      next(err);
    }
  });
  router.put('/:id', async function(req, res, next) {
    try {
      res.json(await movies.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating movie`, err.message);
      next(err);
    }
  });
  router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await movies.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting movie`, err.message);
      next(err);
    }
  });

module.exports = router;