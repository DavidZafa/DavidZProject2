const User = require('../models/user')
const Basketball = require('../models/basketball')
const passport = require('passport')

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: 'team',
        options: { sort: { name: 1 } }
      })
      .then(user => {
        res.render('user/team', { user })
      })

  },
  login: (req, res) => {
  },
  createLogin: (req, res) => {
    const loginProperty = passport.authenticate('local-login', {
      successRedirect: '/user/profile',
      failureRedirect: '/login'
    })

    return loginProperty(req, res)
  },
  signUp: (req, res) => {
  },
  createSignUp: (req, res) => {
    const signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/user/profile',
      failureRedirect: '/login',
      failureFlash: true
    })
    return signupStrategy(req, res)
  },
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  },

  update: (req, res) => {
    req.user.team.push(req.body.player)
    // req.Basketball.push(req.Basketball)
    req.user.save(err => {
      res.redirect(`/user/${req.user.id}`)
    })
  },
  profile: (req, res) => {
    res.redirect(`/user/${req.user.id}`)
  }
}
