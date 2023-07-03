module.exports = (app) => {
  const dishs = require("../controllers/dish.controller.js");
  var router = require("express").Router();

  router.get("/", dishs.findAll);
  router.get("/:id", dishs.findOne);
  app.use('/api/dishs', router);
};
