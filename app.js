require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");

const app = express();
const port = 5001 || process.env.PORT;

app.use(express.urlencoded({ extended: true })); //This middleware is used for parsing incoming data from HTML forms.
app.use(express.json());

// Static Files
app.use(express.static("public"));

// Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/dashboard"));

app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
