let getTodos = function(req, res){
    console.log("GET /todos");
    res.send("from GET /todos");
};

let getSingleTodos = function(req, res){
    console.log("GET /todos/:id");
    res.send("from GET /todos:id");
};

let createTodos = function(req, res){
    console.log("POST /todos");
    res.send("from POST /todos");
};

let deleteTodos = function(req, res){
    console.log("DELETE /todos");
    res.send("from DELETE /todos/:id");
};

let updateTodos = function(req, res){
    console.log("PUT /todos");
    res.send("from PUT /todos");
};


module.exports = {getTodos, getSingleTodos, createTodos, deleteTodos, updateTodos};