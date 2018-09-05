const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
  queries.list().then(people => {
      response.json({people});
  }).catch(next);
});

router.get("/:id", (request, response, next) => {
  queries.read(request.params.id).then(people => {
      people
          ? response.json({people})
          : response.status(404).json({message: 'Not found'})
  }).catch(next);
});

router.post("/", (request, response, next) => {
  queries.create(request.body).then(people => {
      response.status(201).json({people: people});
  }).catch(next);
});

router.delete("/:id", (request, response, next) => {
  queries.delete(request.params.id).then(() => {
      response.status(204).json({deleted: true});
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.update(request.params.id, request.body).then(people => {
      response.json({people: people[0]});
  }).catch(next);
});

module.exports = router;
