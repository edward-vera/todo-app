let express = require("express");

let routes = express.Router();

let controller = require("../controllers/todoControllers");

routes.get("/todos", controller.getTodos);

routes.get("/todos/:id", controller.getSingleTodos);

routes.post("/todos", controller.createTodos);

routes.delete("/todos/:id", controller.deleteTodos);

routes.put("/todos/:id", controller.updateTodos);


module.exports = routes;