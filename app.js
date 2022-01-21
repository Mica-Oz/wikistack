const express = require("express");
const app = express();
const { db, Page, User } = require("./models");

const morgan = require("morgan");
const html = require("./views/layout");

const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use("/wiki", wikiRouter);
//const layout = require('./views/layout');

// const { db } = require("./models");
// db.authenticate().then(() => {
//   console.log("connected to the database");
// });


//app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

// Where your server and express app are being defined:

// ... other stuff

const init = async () => {
  const PORT = 3000;
  await Page.sync({ force: true });
  await User.sync({ force: true });
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
