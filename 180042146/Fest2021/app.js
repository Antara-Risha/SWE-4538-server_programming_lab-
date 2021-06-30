const express = require('express');
const app = express();

//static resource 
app.use(express.static("public"));

//view Engine
app.set("view engine", "ejs");

//Routes
const indexRoutes = require("./routes/index.routes");
app.use(indexRoutes);


module.exports = app;