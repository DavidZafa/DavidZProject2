const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const NBA = require("nba")
const app = express();
require("./config/passport")(passport);
hbs.registerPartials(__dirname + "/views/partial");
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "memes",
    saveUninitialized: true,
    resave: false
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/index.js"));
app.use('/user', require('./routes/user'))
app.use('/basketball', require('./routes/basketball'))
app.listen(3000, () => console.log("server is running"));
