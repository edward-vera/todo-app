let express = require("express");

let PORT = 8080;

let app = express ();

app.use(express.json());
app.use(express.static("public"));

// We haven't defined this yet
// but this will capture all the todo routes we have
// in one place instead of defining the routes directly
// on the app object
let todoRoutes = require("./routes/todoRoutes");
app.use(todoRoutes);
// console.log(todoRoutes);

app.listen(PORT, function(){
    console.log("Application started on port ", PORT);
})


// let app2 = express();

// app2.listen(PORT2, function(){
//     console.log("Application2 started on port ", PORT2);
// })
