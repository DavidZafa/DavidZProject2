const Basketball = require('../models/basketball')
const Team = require('../models/team')
const User = require('../models/user')

module.exports = {
  show: (req, res) => {

  },
  new: (req, res) => {
    res.render('basketball/new')
  },
  search: (req, res) => {
    console.log(req.body)
    Basketball.findOne({ 'Basketball.Name': req.body.name})
      .then(player => {

        res.render('basketball/show', { Basketball })
      })
  },
  update: (req, res) => {
  },
  delete: (req, res) => {

  },
  // update: (req, res) => {
  //   req.basketball.push(req.player.name)
  //   req.user.save(err => {
  //     res.redirect(`/user/${req.user.id}`)
  //   })
  // },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect("/")
    }
  }
}
