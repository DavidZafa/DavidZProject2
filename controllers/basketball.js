const Basketball = require('../models/basketball')
const Team = require('../models/team')
const User = require('../models/user')

module.exports = {
  show: (req, res) => {

  },
  new: (req, res) => {
    res.render('basketball/new', {title: 'new'})
  },
  search: (req, res) => {
    console.log(req.body)
    Basketball.findOne({ 'info.title': req.body.title })
      .then(game => {
        // console.log(game)
        res.render('basketball/show', { game })
      })
  },
  update: (req, res) => {
  },
  delete: (req, res) => {

  }
}
