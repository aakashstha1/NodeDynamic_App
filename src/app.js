const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn"); //Connect to DB
const app = express(); //Instance of an Express application
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");

const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//Middleware
app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use(
  "/jq",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);

app.use(express.static(static_path));
//This middleware serves static files from the public directory. When a request matches a file in this directory, the file is served automatically.

app.set("view engine", "hbs"); //Setting handlebars as view engine
app.set("views", views_path); //Tell express the path of views
hbs.registerPartials(partials_path); //Register particals which are reusable components in hbs

//Routing
app.get("/", (req, res) => {
  res.render("index"); //When a GET request is made to this URL, the server responds with "Hello!"
});

app.get("/about", (req, res) => {
  res.render("about");
});

//Create Server
app.listen(port, () => {
  console.log(`Server running at port no. ${port}`);
});
