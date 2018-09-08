const express = require('express')
const hbs = require('hbs')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')



const app = express()


app.use(bodyParser.urlencoded({ extended: true }))

require('./config/passport')(passport)

hbs.registerPartials(__dirname + "/views/partial")
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(
  session({
    secret: 'memes',
    saveUninitialized: true,
    resave: false
  })
)
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())


app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})
app.use(require('./routes/application.js'))
// app.use('/user', require('./routes/user'))
// app.use('/basketball', require('./routes/basketball'))
// app.use('/team', require('./routes/team'))

var PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});
