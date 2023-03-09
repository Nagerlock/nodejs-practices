var express = require('express');
var router = express.Router();

const BookRepository = require ('../domain/repository/book.repository.js');
const BookModel = require ('../domain/models/book.models.js');
const BookController = require("../api/book.controller.js")


const userRoutes = () => {
  const repository = new BookRepository(BookModel);
  const controller = BookController(repository)


  router.route('/')
  .get(controller.findAll)
  .post(controller.save)
  .delete(controller.eliminar);


return router;
}

module.exports = userRoutes;
