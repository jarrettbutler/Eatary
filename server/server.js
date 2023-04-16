const express = require("express");
const session = require("express-session");

const routes = require("./controllers");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//TODO: Uncomment to make use of database, once set up
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  name: "connect",
  cookie: {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Setup routes to the Server
//Look at /controllers folder
app.use("/", routes);

//TODO: Uncomment to make use of database, once set up
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
});
