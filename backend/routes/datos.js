
  const user = require("../controllers/datos.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/add", user.create);

  // Upload csv file
  router.post("/upload", user.upload);

  // Retrieve all User
  router.get("/", user.findAll);

  // Retrieve a single/record User with id
  router.get("/:id", user.findOne);
  
  module.exports = router;